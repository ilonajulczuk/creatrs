from flask import Flask
from views import CreatureApiView


app = Flask(__name__)

CreatureApiView.register(app, route_base='/creature/', subdomain='')


if __name__ == "__main__":
    app.run()