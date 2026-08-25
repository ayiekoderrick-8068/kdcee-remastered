from flask import Flask, jsonify

from .config import Config
from .extensions import db, migrate, jwt, cors


def create_app(config_object=Config):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(config_object)

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    cors.init_app(app, resources={r"/api/*": {"origins": app.config["CORS_ORIGINS"]}})

    from . import models  # noqa: F401 -- register models with SQLAlchemy metadata

    @app.get("/api/health")
    def health():
        return jsonify(status="ok"), 200

    return app
