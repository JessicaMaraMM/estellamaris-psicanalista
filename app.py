from flask import Flask, render_template, send_from_directory
import time

app = Flask(__name__)

# Desabilita cache para todos os arquivos
@app.after_request
def set_response_headers(response):
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response


@app.route('/')
def home():
    # Força o navegador a recarregar os assets
    cache_version = int(time.time())
    return render_template('index.html', cache_version=cache_version)


@app.route('/sitemap.xml')
def sitemap():
    return send_from_directory('static', 'sitemap.xml')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)