function Category(category){

  
    var InputCategory = [
              {
                  "category": "A",
                  "percentage": 85
              },
              {
                  "category": "B",
                  "percentage": 75
              },
              {
                  "category": "C",
                  "percentage": 65
              },
              {
                  "category": "D",
                  "percentage": 55
              },
              {
                  "category": "E",
                  "percentage": 45
              }
          ];
          for (let i = 0; i < InputCategory.length; i++) {
                  let obj = InputCategory[i];
                  if(obj.category == category){
                      return obj.percentage;
                  }               
                     return "NA";
                      }
  
  
    }
    function GSTCalculate(category,amount){
       var percentage = Category(category);
      var Object = {};
       if(percentage !== "NA"){
           let amount_deduction = (percentage*amount)/100;
          let deduction_after_tax = amount - amount_deduction;
           Object.type = category;
           Object.total_amount = amount;
           Object.percentage_deduction = percentage;
           Object.amount_deducted = amount_deduction;
           Object.amount_after_tax = deduction_after_tax;
          
       }
       else{
          Object.type = "NA";
           Object.total_amount = amount;
           Object.percentage_deduction = 0;
           Object.amount_deducted = 0;
           Object.amount_after_tax = amount;
       }
       return Object;
    }
    console.log(GSTCalculate("A",274500));
   