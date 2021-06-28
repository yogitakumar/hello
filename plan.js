const chart = [
    {
      supplier: "eon",
      plan: "variable",
      rates: [{ price: 13.5, threshold: 100 }, { price: 10 }],
    },
    {
      supplier: "ovo",
      plan: "standard",
      rates: [{ price: 12.5, threshold: 300 }, { price: 11 }],
    },
    {
      supplier: "edf",
      plan: "fixed",
      rates: [
        { price: 14.5, threshold: 250 },
        { price: 10.1, threshold: 200 },
        { price: 9 },
      ],
    },
    {
      supplier: "bg",
      plan: "standing-charge",
      rates: [{ price: 9 }],
      standing_charge: 7,
    },
  ];
  
  function Calculate(chart, usage) {
    console.log("Supplier \t Plan \t\t Total Charge");
    chart.map((e) => {
      let total = 0;
      e.rates.map((obj) => {
        if (obj.threshold) {
          total += obj.price * obj.threshold;
          usage -= obj.threshold;
        } else {
          total += obj.price * usage;
        }
      });
      total /= 100;
      let vatTotal = total + total * (5 / 100);
      /* console.log("--------------------------");
      console.log("supplier " + e.supplier);
      console.log("plan " + e.plan);
      console.log("total price in £" + total);
      console.log("Total price + VAT in £" + vatTotal);
      console.log("----------------------------");*/
      console.log(e.supplier + "\t\t\t" + e.plan + "\t\t" + vatTotal.toFixed(2));
    });
  }


  
  function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
console.log(process.argv);
var file = process.argv.slice(2);
console.log(file[0]);
  console.log(Calculate(chart, 1000));
  console.log(readTextFile(file[0]));