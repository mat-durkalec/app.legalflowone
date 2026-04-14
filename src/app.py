import os
import mysql.connector
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def get_db():
    return mysql.connector.connect(
        host=os.environ["DB_HOST"],
        port=int(os.environ.get("DB_PORT", 3306)),
        database=os.environ["DB_NAME"],
        user=os.environ["DB_USER"],
        password=os.environ["DB_PASSWORD"],
    )


@app.route("/api/health")
def health():
    try:
        conn = get_db()
        conn.close()
        return jsonify({"status": "ok", "db": "connected"})
    except Exception as e:
        return jsonify({"status": "error", "detail": str(e)}), 503


@app.route("/api/services")
def services():
    conn = get_db()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM services")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(rows)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=os.environ.get("FLASK_DEBUG", "0") == "1")
