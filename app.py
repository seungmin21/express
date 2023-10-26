from flask import Flask, request

app = Flask(__name__)

# GET 요청을 처리하여 index.html 파일을 생성합니다.
@app.route('/', methods=['GET'])
def serve_index():
    # index.html 파일을 생성하거나 읽습니다.
    with open('index.html', 'r') as file:
        html_content = file.read()
    return html_content

# POST 요청을 처리하고 서버에서 메시지를 출력합니다.
@app.route('/post', methods=['POST'])
def handle_post():
    print('POST 요청을 받았습니다.')
    return 'POST 요청이 성공적으로 처리되었습니다.'

if __name__ == '__main__':
    app.run(debug=True)