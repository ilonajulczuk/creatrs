from flask.ext.classy import FlaskView

class CreatureApiView(FlaskView):

    def index(self):
        return "Happy creature!"