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


# 🔥 Rota de verificação do Google
@app.route('/google427da0af51c12a44.html')
def google_verification():
    return send_from_directory('static', 'google427da0af51c12a44.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)