from flask import Flask, render_template, request
from graficas import crear_grafica_barras, crear_grafica_torta  # Importa las funciones necesarias

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])  # Cambia a 'GET' y 'POST'
def home():
    if request.method == 'POST':
        consumo_total = float(request.form['consumo'])  # Obtén el valor del consumo del formulario
        crear_grafica_torta(consumo_total)  # Llama a la función para crear la gráfica de torta con el consumo total

    crear_grafica_barras()  # Genera la gráfica de barras al cargar la página
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
