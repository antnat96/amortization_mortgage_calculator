<!-- MORTGAGE CALCULATOR -->
<div id = "mortgage-calculator" class="container">
    <div class="section">
      <!-- Mortgage Calculator Heading -->
      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4>Mortgage Calculator</h4>
          <p class="center-align light">This tool will allow you to assess the approximate monthly payment on a loan given the interest rate and time period.<br>This tool is for informational purposes only and should not be used for real estate transactions or official calculations.</p>
        </div>
      </div>   
      <!-- Mortgage Calculator End -->
      <!-- Calculator fields -->
      <div id = "input-fields-row" class="row">
        <div class = "col s12 m6 l6">
          <form id = "mortgage-calculator-form" class="col s12" >
            <div class="row">
              <div class="input-field col s6 m8 l8 right-align">
                Total Price: &nbsp;&nbsp;&nbsp;&nbsp;$
              </div>
              <div class="input-field col s6 m4 l4 no-marg-top">
                <input name = "total_price" class = "seventy-width" id="total_price" type="number" min = "0" max = "100000000" placeholder = "0.00">
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6 m8 l8 right-align">
                Interest Rate: &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div class="input-field col s6 m4 l4 no-marg-top">
                <input name = "interest_rate" class = "fifty-width" id="interest_rate" type="number" min = "0" max = "10" placeholder = "4.0">%
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6 m8 l8 right-align">
                Down Payment: &nbsp;&nbsp;&nbsp;&nbsp;$
              </div>
              <div class="input-field col s6 m4 l4 no-marg-top">
                <input name = "down_payment" class = "seventy-width" id="down_payment" type="number" min = "0" max = "100000000" placeholder = "0.00">
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6 m8 l8 right-align">
                Mortgage Period (in years):
              </div>
              <div class="input-field col s6 m4 l4 no-marg-top">
                <input name = "mortgage_period" class = "fifty-width" id="mortgage_period" type="number" min = "0" max = "50" placeholder = "30">
              </div>
            </div>
          </form>
        </div>
        <div class = "col s12 m6 l6">
              <br><br>  
              <p class = "green-text center no-marg-top total-cost-text">Monthly Payment (USD):</p>
              <p id = "monthly-payment" class = "no-marg-top green-text center monthly-payment-text">0.00</p>
              <br>
              <p class = "green-text center total-cost-text">Total Cost of Mortgage (USD):</p>
              <p id = "mortgage-cost" class = "no-marg-top green-text center monthly-payment-text">0.00</p>
        </div>
      </div>
    </div>
  </div>
<!-- MORTGAGE CALCULATOR -->