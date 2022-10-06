<html lang="en">
<body>
    <main>
        <section>
            <header>
                <h1>One way data binding and Two way data binding</h1>
            </header>
            <footer>
                <p>
                    Hoy hablaremos de lo Enlace de datos unidireccional y  
                    Enlace de datos bidireccional
                </p>
            </footer>
            <section>
                <header>
                    <h2>One way data binding</h2>
                </header>
                <h3>
                    A menudo escuchará a los desarrolladores hablar sobre <strong> " enlace de datos unidireccional "  </strong> y  <strong>" enlace de datos bidireccional " </strong>
                    en relación con los marcos de JavaScript front-end. ¿Qué es el enlace de datos? El enlace de datos 
                    describe  <strong>el flujo de datos </strong>de un componente a una vista. 
                </h3>
                <br/>
                <h2>Ejemplo</h2>
                <ol>
                <li> El usuario hace clic en un botón en la vista. El evento (clic) está conectado a un método de "incremento", pidiéndole al componente que active un método con el mismo nombre.</li>
                <li> El componente recibe el evento de clic y activa el método increment(), que actualiza el contador.</li>
                <li> La variable de contador en el componente se actualiza y luego envía ese valor actualizado a la vista.</li>
                <li> La vista recibe la variable de contador actualizada y luego actualiza la pantalla para que el usuario vea aparecer un nuevo número</li>
                </ol>
            </section>
            <section>
                <header>
                    <h2>two way data binding</h2>
                </header>
                <h3>
                    El enlace de datos bidireccional es cuando el <strong>flujo de datos entre la vista y el componente va en ambos sentidos</strong> . Hay un <strong> "modelo"</strong>  central o . Si se actualiza en la <strong> vista</strong> , el componente obtiene el cambio. Si está actualizado en el <strong> componente</strong> , la vista obtiene el cambio.
                    El flujo de datos puede ir en cualquier dirección
                </h3>
                <br/>
                <p>
                    La construcción que permite el enlace de datos bidireccional se ve así:
                </p>
                <pre>
                    <code>  < input [(ngModel)] = "username"> </code>
                </pre>
                <p>
                    La construcción [()] en Angular permite el enlace de datos bidireccional. Algunos desarrolladores llaman a esto "banana en una caja"
                </p>
                <h2>Ejemplo</h2>
                <p>
                    Cuando escribe algo en el campo de entrada en la VISTA, actualiza el modelo en el COMPONENTE, que luego envía el valor del modelo actualizado de vuelta a la VISTA
                </p>
            </section>
        </section>
    </main>
</body>
</html>