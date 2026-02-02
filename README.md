<div align="center">

# 🧠 Estella Maris - Psicanalista

### Website Profissional para Consultório de Psicanálise

[![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-3.1.2-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 📋 Sobre o Projeto

Website profissional desenvolvido para a psicanalista **Estella Maris**, oferecendo uma presença digital moderna e acessível para seus pacientes e interessados em serviços de psicanálise. O site apresenta informações sobre a profissional, seus serviços, depoimentos de pacientes e facilita o agendamento de sessões.

### ✨ Principais Características

- 🎨 **Design Moderno e Profissional** - Interface limpa e elegante
- 📱 **Totalmente Responsivo** - Otimizado para desktop, tablet e mobile
- ⚡ **Performance Otimizada** - Carregamento rápido e eficiente
- 🔒 **Cache Control** - Sistema de versionamento automático de assets
- 🗺️ **SEO Otimizado** - Sitemap.xml incluído

---

## 🚀 Funcionalidades

### Frontend Interativo

- ✅ **Carrossel de Fotos do Consultório**
  - Navegação por setas
  - Suporte a gestos touch/swipe em dispositivos móveis
  - Transições suaves e animadas

- 📹 **Galeria de Vídeos do Instagram**
  - Layout responsivo em grid
  - Integração com conteúdo do Instagram

- 🧭 **Menu de Navegação Adaptativo**
  - Nomes completos em desktop
  - Versão abreviada para mobile
  - Smooth scroll ao clicar nos links

- 💬 **Seção de Depoimentos**
  - Cards com design elevado
  - Efeitos hover interativos
  - Layout responsivo em grid

- 📞 **Call-to-Action (CTA)**
  - Botão "Agende sua Sessão" em destaque
  - Facilita o contato direto com a profissional

### Backend Robusto

- 🔄 **Sistema de Cache Inteligente**
  - Versionamento automático de assets
  - Prevenção de cache indesejado
  - Atualizações instantâneas

- 🗺️ **SEO e Indexação**
  - Sitemap.xml para mecanismos de busca
  - Favicon personalizado
  - Meta tags otimizadas

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Flask 3.1.2** - Framework web Python minimalista e poderoso
- **Gunicorn** - Servidor WSGI para produção
- **Jinja2** - Engine de templates
- **Python-dotenv** - Gerenciamento de variáveis de ambiente

### Frontend
- **HTML5** - Estrutura semântica moderna
- **CSS3** - Estilização avançada
  - Media Queries para responsividade
  - Flexbox e CSS Grid
  - Animações e transições
- **JavaScript Vanilla** - Interatividade sem dependências externas

### Ferramentas e Bibliotecas
- **Markdown** - Processamento de conteúdo
- **Werkzeug** - Utilitários WSGI
- **MarkupSafe** - Segurança em templates

---

## 📁 Estrutura do Projeto

```
projeto-estella-maris/
│
├── app.py                      # Aplicação Flask principal
├── Procfile                    # Configuração para deploy (Heroku)
├── requirements.txt            # Dependências Python
├── README.md                   # Documentação do projeto
│
├── content/                    # Conteúdo do site
│   └── posts/                  # Posts e artigos
│
├── static/                     # Arquivos estáticos
│   ├── sitemap.xml            # Sitemap para SEO
│   ├── css/
│   │   └── style.css          # Estilos principais
│   ├── images/                # Imagens e fotos
│   └── js/
│       └── main.js            # Scripts JavaScript
│
└── templates/                  # Templates HTML
    ├── base.html              # Template base
    └── index.html             # Página principal
```

---

## 🚀 Como Executar

### Pré-requisitos

- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)

### Instalação e Execução Local

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/projeto-estella-maris.git
cd projeto-estella-maris
```

2. **Crie um ambiente virtual (recomendado)**
```bash
python -m venv venv
```

3. **Ative o ambiente virtual**
```bash
# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

4. **Instale as dependências**
```bash
pip install -r requirements.txt
```

5. **Execute a aplicação**
```bash
python app.py
```

6. **Acesse no navegador**
```
http://localhost:5000
```

### Acesso via Rede Local (Mobile)

Para acessar o site em dispositivos móveis na mesma rede:

1. Descubra seu IP local:
```bash
# Windows
ipconfig

# Linux/Mac
ifconfig
```

2. Acesse no dispositivo móvel:
```
http://[seu-ip-local]:5000
```

**Exemplo:** `http://192.168.1.100:5000`

---

## 🌐 Deploy em Produção

### Heroku

Este projeto está configurado para deploy no Heroku através do `Procfile`:

```bash
# Instalar Heroku CLI
# Fazer login
heroku login

# Criar aplicação
heroku create nome-da-sua-app

# Deploy
git push heroku main

# Abrir aplicação
heroku open
```

### Outros Serviços

O projeto é compatível com:
- **Render**
- **Railway**
- **PythonAnywhere**
- **AWS Elastic Beanstalk**
- **Google Cloud Run**
- **DigitalOcean App Platform**

---

## 🔧 Configurações

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (opcional):

```env
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=sua-chave-secreta-aqui
```

### Debug Mode

Por padrão, o modo debug está ativado em desenvolvimento. Para produção, certifique-se de desativá-lo:

```python
# app.py
if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
```

---

## 📱 Responsividade

O site foi otimizado para os seguintes breakpoints:

- 📱 **Mobile:** < 768px
- 📱 **Tablet:** 768px - 1024px
- 💻 **Desktop:** > 1024px

Testado e compatível com:
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ Chrome Desktop
- ✅ Firefox
- ✅ Edge
- ✅ Safari Desktop

---

## 🎨 Customização

### Cores

As cores principais podem ser alteradas no arquivo [static/css/style.css](static/css/style.css):

```css
:root {
    --primary-color: #seu-codigo-hex;
    --secondary-color: #seu-codigo-hex;
    --background-color: #seu-codigo-hex;
}
```

### Conteúdo

O conteúdo principal está em [templates/index.html](templates/index.html).

### Imagens

Adicione suas imagens na pasta [static/images/](static/images/).

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto é privado e desenvolvido exclusivamente para **Estella Maris - Psicanalista**.

---

## 👤 Autor

Desenvolvido com 💙 para Estella Maris

---

## 🔄 Atualizações

### Versão 1.0.0 (Fevereiro 2026)
- ✅ Lançamento inicial do website
- ✅ Sistema de carrossel de fotos
- ✅ Galeria de vídeos do Instagram
- ✅ Menu responsivo adaptativo
- ✅ Seção de depoimentos
- ✅ Sistema de cache otimizado
- ✅ SEO básico implementado

---

<div align="center">

**Desenvolvido com IA e dedicação para oferecer a melhor experiência digital** 🧠✨

</div>
