from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def editor():
  return render_template("index.html")

@app.route('/test')
def test():
  return render_template("test.html")

@app.route('/api/test')
def api_test():
  return

if __name__ == "__main__":
  app.run(debug=True, port=8000)  
