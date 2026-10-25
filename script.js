const opciones={
m:{factor:3.280839895,origen:'m',destino:'ft'},
Tecnología e Informática • Grado 10.º • Proyecto de desarrollo web con IA
cm:{factor:0.3937007874,origen:'cm',destino:'in'},
km:{factor:0.6213711922,origen:'km',destino:'mi'},
kg:{factor:2.2046226218,origen:'kg',destino:'lb'}
};
document.getElementById('convertir').addEventListener('click',()=>{
const entrada=document.getElementById('cantidad');
const salida=document.getElementById('resultado');
const texto=entrada.value.trim();
if(texto===''){salida.textContent='Ingresa una cantidad.';return;}
const valor=Number(texto);
if(!Number.isFinite(valor)){
salida.textContent='Escribe un número válido.';return;
}
const op=opciones[document.getElementById('tipo').value];
salida.textContent=`${valor} ${op.origen} = `+
`${(valor*op.factor).toFixed(4)} ${op.destino}`;
});