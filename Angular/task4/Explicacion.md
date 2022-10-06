<html lang="en">

<body>
    <main>
     <header>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrpZUHoZUspJrtkZz2uAe9pSHPqSMKAZMew&usqp=CAU" alt="Angular" width="200px" height="200px">
        </header>
        <h1>Explicación</h1>
        <section>
            <header>
                <h2>SPA</h2>
            </header>
            <p>
                Considero que es la razón más importante de angular, poder crear <strong> Single Page
                    Aplication</strong>, esto nos permitía tener un solo archivo html para toda la aplicación.
                Lo cual ayudará que nuestra página cargue más rápido y con una mejor fluidez, dándonos una mejor
                experiencia de usuario y también un código más mantenible.
                Esto es posible, gracias a la tecnología ajax <strong>( Asynchronous JavaScript And XML)</strong> y
                <strong>JSON</strong>
            </p>
        </section>
        <section>
            <header>
                <h2>
                    Estructura y flujo
                </h2>
            </header>
            <p>
                En el video podemos notar que si intenta explicar el flujo de ejecución de una aplicación inicial.
                Se nos explica que al iniciar la aplicación esta buscara una función denominada como principal(main) el
                main esta la definición de <strong> Módulo raíz</strong>.
                En la aplicación por defecto el módulo raíz se encontrará en el archivo app.mudole.ts el módulo de raíz
                tendrá definición de los componentes principales a cargar
                recordemos que angular utiliza <strong> el patrón de diseño modular</strong> y <strong>el patrón de
                    diseño MVC</strong>, por eso encontraremos todos nuestros componentes debidos en módulos.
                <br>
                por defecto nuestro componente principal es <strongApp>Appcomponet</strongApp> dentro de él podemos
                encontrar la definicón de
                una clase y un decorador
            </p>
        </section>
        <section>
            <header>
                <h2>Componentes y selector</h2>
            </header>
            <p>
                En el video noes explican como utilizar los componentes  principales y las propiedades.
                En el ejemplo podemos ver que utilizamos el código modificado con anterioridad en otro vídeo en el cual
                solo contamos la propiedad title  que se encuentra dentro del componente de la clase Appcomponent.
                En el video creamo un cambio en el <strong>index.hmtl</strong>, este index contiene el selctor por
                defecto
            <pre>
                    < app-root>< app-root/>
                </pre>
            que luego de modificarlo por
            <pre>
                    <p>< app-raiz >< app-raiz/ > </p>
                </pre>
            el codigo ya no se presenta en pantalla.
            Esto sucede por que el selector en el componente <strong>app.components.ts</strong> no se ha modificado
            si nos dirigimos al archivo <strong>app.component.ts</strong> veremos un codigo similar a este:
            <pre>
                    <code>
                        import {compnent} from '@angular/core';
                        @compnent({
                            selector:'app-root', //TODO: modificar 
                            selector sigue siendo app-root
                            templateUrl:'./app.component.html',
                            styleUris:['-/app.component.css']
                        })
                        export class Appcomponet {
                            title = 'miprimeraApp'
                        }
                    </code>
                </pre>
            Para poder que el cambio funcionara tuvimos que modificar el selector de <em>'app-root'</em> a
            <em>'app-raiz'</em>
            <pre>
                    <code>
                        import {compnent} from '@angular/core';
                        @compnent({
                            selector:'app-raiz', // modificado
                            selector sigue siendo app-root
                            templateUrl:'./app.component.html',
                            styleUris:['-/app.component.css']
                        })
                        export class Appcomponet {
                            title = 'miprimeraApp'
                        }
                    </code>
                    también podemos agregar nuevos prapidades
                    personalizados en la calses Appcomponet
                    <pre>
                        <code>
                            import {compnent} from '@angular/core';
                            @compnent({
                                selector:'app-root', // aqui se nota que el selector sigue siendo app-root
                                templateUrl:'./app.component.html',
                                styleUris:['-/app.component.css']
                            })
                            export class Appcomponet {
                                title = 'miprimeraApp'
                                saludo: 'Mi primer saludo bee'
                            }
                        </code>
            </p>
        </section>
    </main>
    <footer>
    <br/>
    <span>Kravmaga01</span>
    </footer>
</body>
</html>
