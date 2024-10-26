import pandas as pd
import matplotlib.pyplot as plt

def crear_grafica_barras():
    # Cargar el archivo CSV
    df = pd.read_csv('datos_energia.csv')  # Asegúrate de que el nombre del archivo sea correcto

    plt.figure(figsize=(10, 6))
    plt.bar(df['fuente'], df['porcentaje'], color='green')  # Usa 'fuente' y 'porcentaje' como columnas
    plt.title('Distribución de Fuentes de Energía')
    plt.xlabel('Fuentes de Energía')
    plt.ylabel('Porcentaje')
    plt.grid(axis='y')

    # Guardar la gráfica en la carpeta 'static/img'
    plt.savefig('static/img/grafico_barras.png')
    plt.close()

def crear_grafica_torta(consumo_total):
    # Definir los porcentajes de cada fuente de energía
    df = pd.read_csv('datos_energia.csv')

    # Calcular los valores basados en el consumo total
    total_hidroelectrica = (df[df['fuente'] == 'Hidroeléctrica']['porcentaje'].values[0] / 100) * consumo_total
    total_otros = consumo_total - total_hidroelectrica

    # Datos para la gráfica de torta
    datos = [total_hidroelectrica, total_otros]
    etiquetas = ['Hidroeléctrica', 'Otras Fuentes']

    plt.figure(figsize=(8, 8))
    plt.pie(datos, labels=etiquetas, autopct='%1.1f%%', startangle=140)
    plt.title('Distribución del Consumo de Energía')
    
    # Guardar la gráfica de torta en la carpeta 'static/img'
    plt.savefig('static/img/grafico_torta.png')
    plt.close()

