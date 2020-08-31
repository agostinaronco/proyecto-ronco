\*Componentes

==> como clases (intelligent components)
Manejar el estado, pasar las propiedades, ejecutar las acciones y pasar las prop a los componente funcionales.
Es donde esta toda la logica de negocios
Tenemos un "this" disponible que yo puedo referenciar en toda la clase para referirme a ese elemento.

class App extends Component {
render(){
return();
}
}

==> como funciones (dummy components)
Estan encargadas o son mejores para presentar informacion. Solo tiene q ocuparse de renderizar algo. me llega algo por prop y lo renderizo

const App = () => {
return();
}

\*Props
Son la forma que tiene React para pasar parámetros de un componente superior a sus children
Pueden ser lo que sea

\*Ciclos de vida lifecycles
Seri de esados por los cuales pasa todo componente a lo largo de su existencia
1-no bloquear el rendering con tares pesadas
2-Ejecutar tareas asincronicas con efectos secundarios luego del montaje

ciclos
START - MOUNT - CHANGE - DISMOUNT
