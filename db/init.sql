CREATE TABLE IF NOT EXISTS services (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(120)  NOT NULL,
    description TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO services (name, description) VALUES
    ('Company Formation',     'LLC, Corporation, Partnership registration in your chosen jurisdiction.'),
    ('Compliance Management', 'Annual filings, registered agent service, and deadline tracking.'),
    ('Legal Documentation',   'Operating agreements, contracts, and custom legal templates.'),
    ('International Expansion','Foreign qualification and multi-jurisdiction compliance guidance.'),
    ('Business Licensing',    'Industry-specific permits researched, applied for, and renewed.'),
    ('Ongoing Legal Support', 'Dedicated advisors for agreements, questions, and strategic decisions.');
