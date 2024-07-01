let cod = prompt("Digite seu código (desc ou DESC1/2/3/3/4/5): ");

let desc;
let valor_desc;

let valor = 1000;

if (cod == cod.toUpperCase() || cod == cod.toLowerCase()) {

    cod = cod.toLowerCase();

    switch (cod) {

        case "desc1":
            desc = 0.05;
            valor_desc = valor - (valor * desc);

            alert(`O desconto é ${desc * 100} %, valor original é ${valor} e o valor novo é ${valor_desc}`);
            break;

        case "desc2":
            desc = 0.1;
            valor_desc = valor - (valor * desc);
            alert(`O desconto é ${desc * 100} %, valor original é ${valor} e o valor novo é ${valor_desc}`);
            break;

        case "desc3":
            desc = 0.15;
            valor_desc = valor - (valor * desc);
            alert(`O desconto é ${desc * 100} %, valor original é ${valor} e o valor novo é ${valor_desc}`);
            break;

        case "desc4":
            desc = 0.2;
            valor_desc = valor - (valor * desc);
            alert(`O desconto é ${desc * 100} %, valor original é ${valor} e o valor novo é ${valor_desc}`);
            break;

        case "desc5":
            desc = 0.25;
            valor_desc = valor - (valor * desc);
            alert(`O desconto é ${desc * 100} %, valor original é ${valor} e o valor novo é ${valor_desc}`);
            break;

        default:
            alert("Código inválido");
            break;

    }
}