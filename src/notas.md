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

    es un objeto

    puedo extender un componetne clase ya gregarle mas capacidades.
    el contructir define el contexto de la clase

    ==> como funciones (dummy components)
    Estan encargadas o son mejores para presentar informacion. Solo tiene q ocuparse de renderizar algo. me llega algo por prop y lo renderizo

    const App = () => {
    return();
    }

    funciones solo viven durante el tiempo q son ejecutadas (dif con clases)

        -->Estados en las funciones: HOOKS
        UseState: recibe el parametro inicial

        UseEffect: reemplaza los ciclos de vida
        useEffect(()=>{
        "montar"
        return () => {
        "desmontar"
        }
        }, ['"al cambiar" "si no se pone valor recarga por cada cambio"]);

\*Props
Son la forma que tiene React para pasar parámetros de un componente superior a sus children
Pueden ser lo que sea

\*Ciclos de vida lifecycles
Seri de esados por los cuales pasa todo componente a lo largo de su existencia
1-no bloquear el rendering con tares pesadas
2-Ejecutar tareas asincronicas con efectos secundarios luego del montaje

\*ciclos
START - MOUNT - CHANGE - DISMOUNT

\*React.Fragment
Propiciado por React para envolver elementos adyacentes si no usamos un div contenedor. COmponente q engloba otros componetnes cuya utilidad es englobar y mostrarme los hijos
<> </>

\*Composicio de commponentes
Props.children
Tener children te permite tener componentes mas generales que despues puedan ser reutilizados en varios lados de la app

\*Promesa
Algo que se va a ejecutar en elagun momento y nos va a devolver un resultado
un objeto que lo q hace internamente es poenr en cola ua operacion a realizar. Co tenga tiempo o espacio en su fila de ejecucion, la ejecuta y nos va a devolver un resulado
lo que se pretende es q mientras se resuelve esa promesa, nos podemo seguir haciendo otras cosas
ESTADOS: PENDING => FULLFILLED || REJECTED

    -Metodo sincronico
    -Metodo asincronico

    estructura de promesa:

    const promesa = new Promise ((resolve,reject) =>{
        //tarea sincronica
        resolve(true);
    })

    //estos callbakcs se ejecutan cdo se resuelven la promesa
    promesa.then(res => { //then imprimi algo
    throw new Error ('algo'); //retornar la fn, con un error. no es un error de la promise. luego va al catch
        console.log (res);
    }, err => {
        console.log (err);
    }).catch((err)=>{
        console.log ('mensaje de error');
        return 'value';
    }).then(fallback) =>{  //le estoy seteando una respuesta
        console.log(fallback) //imprime 'value'
    }

    metodo catch recibe otra funcione q lo q espra es un error

    se ejecuta la promesa y si deuelve un error directamente pasa al "error"

/\*MAP
Metodo de un array. me permite recibir una funcion que me permite ransformar los datos de mi array

/\*API

/\*Routing y navegacion

productos/:id --> los : indican q es una url param dinamico

template literal `${}`
para insertar cont js dentro de un string

/\* CONTEXTO
variable global
useContext
const CrearContexto = Reat.createContext()
genera el provier donde envuelvo los componentes que queiro q tengan acceso al componente
<CrearContexto.Provider value={}></crearContecto.Provider>
Provider propaga hacia sus hijos el contexto

useContext se cosume el contexto

const UsarContexto=useContext(CrearContexto);
nos devuelve el valor del value

<CrearContexto.Consumer></crearContecto.Consumer>

/\*Renderizado condicional
