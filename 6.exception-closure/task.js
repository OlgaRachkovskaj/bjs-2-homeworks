/*Задача1*/
function parseCount (n)
        {
            let parseResult = Number.parseFloat(n);
            if (Number.isNaN(parseResult)) throw new Error("Невалидное значение");
            return parseResult;
        }

 
    function validateCount(n) {
        try {
            return parseCount(n);
        } catch (e)  {
            return e;
        }
    }

 
 /*Задача2*/

   class Triangle
        {
            constructor(a, b, c)
            {
                this.a = a;
                this.b = b;
                this.c = c;
                if (a > b + c || b > a + c || c > a + b)
                {
                    throw new Error("Треугольник с такими сторонами не существует")
                }
                
            }

                get perimeter ()
            {
                return (this.a + this.b + this.c);
            }
 
                get area ()
            {
       
                const p = this.perimeter / 2;
                return Number(((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3));
            }
        }


      function getTriangle (a, b, c)
        {
            try
            {
                return new Triangle(a, b, c);
            } catch (e){
            	let errMsg = "Ошибка! Треугольник не существует";
            	return {
            		get perimeter(){
            			return errMsg;
            		},
            		get area(){
            			return errMsg;
            		}
            }
                      
          }
        } 
