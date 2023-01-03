import { useState } from "react";

const Calculadora = () => {
    const [anio, setAnio]=useState(0);
    const [mes, setMes]= useState(0);
    const [dia, setDia]=useState(0);


    const fechaNacimiento = document.getElementById("nacimientofecha");
    const edad = document.getElementById("edad");

    window.addEventListener('load', function(){
        fechaNacimiento.addEventListener('change', function(){
            if (this.value) {
                edad.innerText = `La edad es: ${calcularEdad(this.value)} años`
            }
        }
        );
    });

    const calcularEdad = (fechaNacimiento) => {
        var hoy = new Date();
        var cumpleanos = new Date(fechaNacimiento);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        return edad;
    }

    const onChangeValores=function(evento){
        const a=evento.target.value;
        const b = a.substring(0,4)
        const mes= a.substring(5,7)
        const dia= a.substring(8,10)
        console.log(b)
        

        var hoy = new Date();
        var cumpleanos = new Date(a);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }


        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth() + 1;
        var ahora_dia = fecha_hoy.getDate();


        // calculamos los meses
        var meses = 0;

        if (ahora_mes > mes && dia > ahora_dia)
            meses = ahora_mes - mes - 1;
        else if (ahora_mes > mes)
            meses = ahora_mes - mes
        if (ahora_mes < mes && dia < ahora_dia)
            meses = 12 - (mes - ahora_mes);
        else if (ahora_mes < mes)
            meses = 12 - (mes - ahora_mes + 1);
        if (ahora_mes === mes && dia > ahora_dia)
            meses = 11;

        // calculamos los dias
        var dias = 0;
        if (ahora_dia > dia)
            dias = ahora_dia - dia;
        if (ahora_dia < dia) {
            var ultimoDiaMes = new Date(ahora_ano, ahora_mes - 1, 0);
            dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
        }



        setMes(meses)
        setDia(dias)



        setAnio(edad);         
    }


    return ( 
        <>
        <h1>Calculadora de edad </h1>
        <form>
            <label>Ingresa tu cumpleaños:
                <input onChange={onChangeValores} id="nacimientofecha" type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}" max="2022-12-29" />
                <span class="validity"></span>
            </label>
       </form>
       <h2 id="edad">
        Tienes: {anio} años
       </h2>
       <h2 id="edad"> {mes} meses
       </h2>
       <h2 id="edad">
        {dia} dias
       </h2>
       
        </>
     );
}
 
export default Calculadora;
