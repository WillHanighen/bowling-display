from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def editor():
  return render_template("index.html")

@app.route('/test')
def test():
  return render_template("test.html")

@app.route('/api/test', methods=['POST'])
def api_test():
  if request.method == "POST":
    print(request.form.get("test"))
  else:
    print("not post grrrr")
  return

if __name__ == "__main__":
  app.run(debug=True, port=8000)  
