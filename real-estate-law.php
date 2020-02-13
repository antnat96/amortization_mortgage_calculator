<!DOCTYPE html>
<html lang="en">

<!-- HEAD -->
  <?php 
    $pageTitle = "Real Estate Law"; 
    include("include/head.php"); 
  ?>
<!-- HEAD -->

<!-- BODY -->
<body>

<!-- NAVBAR -->
  <?php include("include/navbar.php"); ?>
<!-- NAVBAR -->

<!-- PARALLAX -->
  <?php 
    $coverText = "Experts in residential and commercial real estate transactions"; $imgFile = "charlotte-park.jpg"; $imgDescription = "A Charlotte Park"; 
    include("include/parallax-image.php");
  ?>
<!-- PARALLAX -->

<!-- REAL ESTATE -->
  <div id = "real-estate-description" class="container">
      <div class="section">
        <div class="row standard-text"> <!-- row -->
          <!-- Real Estate Law Description -->
          <div class="col s12 m12 l12">
            <div class="icon-block">
              <h2 class="center blue-text"><i class="material-icons">home</i></h2>
              <h4 class="center">REAL ESTATE LAW</h4>
              <p class = "center light practice-areas-text">
                For over 20 years, counsel at the Denny Law Firm, PLLC has represented developers, construction contractors, property owners, lenders, and other individuals and entities throughout the country. We proudly handle the full range of real estate matters, from the smallest projects to multi-million dollar deals.
              </p>
            </div>
          </div>
        <!-- Real Estate Law Description -->
      </div> <!-- row -->  
      <div class = "row standard-text"> <!-- row -->
        <div class = "col s12 m6 l6"> <!-- Residential -->
          <div class="icon-block">
            <h5 class = "center">Residential</h5>
            <p class = "details-left light practice-areas-text">
              <br>
              The Denny Law Firm, PLLC is prepared to help with all of your residential real estate transactions.
              <br><br>
              The buying and selling of property, whether a primary residence, vacation home, or investment property, is one of the largest financial commitments most individuals will ever make and it can be one of the most stressful projects a buyer or seller can undertake.
              <br><br>
              Once an owner decides to sell a property, he or she generally lists the property with a real estate broker.  After the property is listed (usually on the Multiple Listing Service or "MLS"), a buyer will make a formal offer (an Offer to Purchase and Contract- Standard Form 2-T) that is secured by an earnest money deposit and due diligence fee (this is a fee given to owner to compensate him or her for the time that his or her property is off the market).  If the property owner accepts the offer, a contract is formed, which sets forth the rights and obligations of both parties with regard to the sale of the property.
              <br><br>
              Hiring an attorney guarantees that you will receive an expert, unbiased explanation and evaluation of the contract. Your real estate attorney will work to negotiate fair and reasonable terms and will help you avoid pitfalls of which you may be unaware. You may think the contract is clear and easy to understand, but it may contain provisions that are unenforceable or that create more liability than you realize. Litigating your rights after the fact can take years and cost thousands in legal fees.
              <br><br>
              Some people choose to sell their properties on their own without the help of real estate agency. While this approach can save you thousands of dollars in commission, it also can expose you to liabilities and headaches of which you were unaware. If you decide to sell a property on your own, you should consult an attorney before you consider accepting an offer or before you decide to list the property.
            </p>
          </div>
        </div><!-- Residential -->
        <div class = "col s12 m6 l6"> <!-- Commercial -->
          <div class="icon-block">
            <h5 class = "center">Commercial</h5>
            <p class = "details-left light practice-areas-text"><br>
              We handle all flavors of commercial real estate transactions, including:
              <br><br>
              &#8226;&nbsp;Real estate development — Land acquisition, development agreements, subdivision and planned area developments, slum clearance and redevelopment, airport expansion, sewer and water projects, new landfills, road construction
              <br><br>
              &#8226;&nbsp;Construction law — Construction contracts, design professional contracts, bidding, bid protests, subcontractor disputes, mechanic's liens, construction defect litigation
              <br><br>
              &#8226;&nbsp;Planning and zoning — rezoning, zoning appeals, platting and permitting, special use permits, variances, ordinance drafting
              <br><br>
              &#8226;&nbsp;Commercial property transactions — real property sales and acquisitions, financing, commercial lease agreements
              <br><br>
              &#8226;&nbsp;Real estate litigation and property disputes — breach of contract, title defects, adverse possession, deed restrictions, eminent domain (public taking), easements, right-of-way, lease disputes
              <br><br>
              &#8226;&nbsp;Loan workouts and foreclosures — trustee sales, repossession, prosecution of deficiency lawsuits, short sales
              <br><br>
              &#8226;&nbsp;Foreclosure issues — liability analysis, application of anti-deficiency statutes, defense of post-foreclosure deficiency lawsuits
              <br><br>
              &#8226;&nbsp;Residential Real Estate Closings — handle conventional residential real estate closings for various local realtors and lenders
              <br><br>
              &#8226;&nbsp;Commercial and residential evictions — eviction notices and lawsuits
            </p>
          </div>
        </div> <!-- Commercial -->
      </div> <!-- row -->        
    </div>
  </div>
<!-- REAL ESTATE -->

<!-- MORTGAGE CALCULATOR -->
  <?php include("include/mortgage-calculator.php"); ?>
<!-- MORTGAGE CALCULATOR -->

<!-- PARALLAX -->
  <?php 
    $coverText = "Rapid and cost-effective real estate closings"; $imgFile = "home.jpg"; $imgDescription = "A Cozy Home"; 
    include("include/parallax-image.php");
  ?>
<!-- PARALLAX -->

<!-- FOOTER -->
  <?php include("include/footer.php"); ?>
<!-- FOOTER -->

<!-- SCRIPTS -->
  <script src="node_modules/jquery/dist/jquery.min.js"></script>
  <script src="js/materialize.min.js"></script>
  <script src="js/init.js"></script>
  <script src="js/functions.js"></script>
  <script src="js/countTo.js"></script>
  <script src="//cdn.jsdelivr.net/npm/jquery.scrollto@2.1.2/jquery.scrollTo.min.js"></script>
<!-- SCRIPTS -->
<!-- MODALS -->
<?php include("include/cookie-modal.php"); ?>
<!-- MODALS -->
</body>
<!-- BODY -->

</html>
