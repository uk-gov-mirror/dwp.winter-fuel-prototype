const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/sprint53/query', function(req, res) {
  if (req.body['query'] === 'eligibility') {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/sprint53/find');
  }
});


// FIND SOMEONE AND SECURITY -------------------------------------------------


// Find someone to find result
router.post('/sprint53/find', function(req, res) {
  if (req.body['nino'] === 'XX987654X') {
    res.redirect('/sprint53/find-2');
  } else if (req.body['nino'] === 'xx987654x') {
    res.redirect('/sprint53/find-2');
  } else {
    res.redirect('/sprint53/find-1');
  }
});


// Find result to security
router.post('/sprint53/find-1', (req, res) => {
  res.redirect('/sprint53/security')
});
// Find result to security
router.post('/sprint53/find-2', (req, res) => {
  res.redirect('/sprint53/security-2')
});


router.post('/sprint53/security', (req, res) => {
  res.redirect('/sprint53/overview')
});

router.post('/sprint53/security-2', (req, res) => {
  res.redirect('/sprint53/overview-2')
});

// THIS IS WHAT YOU NEED TO CHANGE BACK!!!!!! ---------------------------
//-------------------------------------------------------------------------


//
router.post('/sprint53/contact-preferences', (req, res) => {
  res.redirect('/sprint53/overview')
});

// CONTACT CHANGES -----------------------------------------------------------

// Correspondence address to address found
router.post('/sprint53/correspondence-address', (req, res) => {
  res.redirect('/sprint53/correspondence-address-1')
});

// Correspondence address to address found
router.post('/sprint53/correspondence-address-1', function(req, res) {
  if (req.body['correspondence-address-change'] === 'no address found') {
    res.redirect('correspondence-address-search');
  } else {
    res.redirect('contact');
  }
});

router.post('/sprint53/correspondence-address-search', (req, res) => {
  res.redirect('/sprint53/correspondence-address-search-result')
});

router.post('/sprint53/correspondence-address-search-result', (req, res) => {
  res.redirect('/sprint53/contact')
});

// Home phone number change back to contact
router.post('/sprint53/homephone', (req, res) => {
  res.redirect('/sprint53/contact')
});

// Home phone number removal
router.post('/sprint53/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('homephone');
  }
});

// Work phone number change back to contact
router.post('/sprint53/workphone', (req, res) => {
  res.redirect('/sprint53/contact')
});

// Work phone number removal
router.post('/sprint53/workphone-remove', function(req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('workphone');
  }
});

// Mobile phone number change back to contact
router.post('/sprint53/mobilephone', (req, res) => {
  res.redirect('/sprint53/contact')
});

// Mobile phone number removal
router.post('/sprint53/mobilephone-remove', function(req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('mobilephone');
  }
});

// Email address change back to contact
router.post('/sprint53/email', (req, res) => {
  res.redirect('/sprint53/contact')
});

// Email removal
router.post('/sprint53/email-remove', function(req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('email');
  }
});

// Contact preference change back to contact
router.post('/sprint53/contact-preferences', (req, res) => {
  res.redirect('/sprint53/contact')
});

// Address -------------------------------------------------------------------
router.post('/sprint53/address', function(req, res) {
  if (req.body['postcode'] === 'NE2 1YL') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else if (req.body['postcode'] === "DH3 4AE") {
    res.redirect('/sprint52c/address-carehome');
  } else {
    res.redirect('address-1');
  }
});

// Address select, yes or search address
router.post('/sprint53/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});


// Care home address select, yes or search address
router.post('/sprint53/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/sprint53/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/sprint53/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});

//
router.post('/sprint53/overseas-address', (req, res) => {
  res.redirect('/sprint53/move-date')
});


// Move date
router.post('/sprint53/move-date', (req, res) => {
  res.redirect('/sprint53/over-payment-2')
});

// Care home move date
router.post('/sprint53/carehome-move-date', (req, res) => {
  res.redirect('/sprint53/declaration')
});


router.post('/sprint53/homephone-address', function(req, res) {
    if (req.body["homephone-address"] === "Yes") {
      res.redirect('homephone-address-change');
    } else {
      res.redirect('poa');
    }
});


router.post('/sprint53/homephone-address-change', (req, res) => {
  res.redirect('/sprint53/poa')
});

// Living with anyone at address change
router.post('/sprint53/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/sprint53/living-with-date', (req, res) => {
  res.redirect('/sprint53/homephone-address')
});


// Living with anyone at address change
router.post('/sprint53/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('living-with-date');
  }
});

// Power of attourney
router.post('/sprint53/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('declaration');
  }
});

router.post('/sprint53/poa-people', (req, res) => {
  res.redirect('/sprint53/declaration')
});

// Declaration

router.post('/sprint53/declaration', function(req, res) {
    if (req.session.data["movemonth"] === "08") {
      res.redirect('make-payment');
    } else if (req.session.data["movemonth"] === "8") {
      res.redirect('make-payment');
    } else if (req.session.data["movemonth"] === "07") {
      res.redirect('over-payment');
    } else if (req.session.data["movemonth"] === "7") {
      res.redirect('over-payment');
    } else if (req.session.data["movemonth"] === "10") {
      res.redirect('over-payment');
    } else if (req.session.data["movemonth"] === "05") {
      res.redirect('over-payment-2');
    } else if (req.session.data["movemonth"] === "5") {
      res.redirect('over-payment-2');
    } else {
      res.redirect('overview-changed');
    }
});


// Overpayment recoverable?
router.post('/sprint53/over-payment', (req, res) => {
  res.redirect('/sprint53/overview-changed')
})
;

// Overpayment recoverable?
router.post('/sprint53/over-payment-2', (req, res) => {
  res.redirect('/sprint53/make-new-claim')
})
;

// Make new claim to overview with paused payments
router.post('/sprint53/make-new-claim', (req, res) => {
  res.redirect('/sprint53/overview-changed')
})
;

// Check to payments
router.post('/sprint53/recoverable-payment', (req, res) => {
  res.redirect('/sprint53/overview-recoverable')
});

// Check to payments
router.post('/sprint53/check', (req, res) => {
  res.redirect('/sprint53/make-payment')
});

// Make payment to contact
router.post('/sprint53/make-payment', (req, res) => {
  res.redirect('/sprint53/overview-topup-1')
});



// Living with age back to contact
router.post('/sprint53/living-with-age', (req, res) => {
  res.redirect('/sprint53/living-with-date')
});

// Living with age back to contact
router.post('/sprint53/living-with-age-q-week', (req, res) => {
  res.redirect('/sprint53/poa')
});




// PAYMENT CHANGES -----------------------------------------------------------

// Bank details change to bank confirm
router.post('/sprint53/bankdetails', (req, res) => {
  res.redirect('/sprint53/confirm-bank')
});

// Bank confirm to payment
router.post('/sprint53/confirm-bank', function(req, res) {
  if (req.body['bank-name'] === 'Yes') {
    res.redirect('payment');
  } else {
    res.redirect('bankdetails');
  }
});

// Reissue payment to payment with confirmation and updated
router.post('/sprint53/reissue-payment', (req, res) => {
  res.redirect('/sprint53/payment-confirmation')
});


// RETURNED PAYMENTS ---------------------------------------------------------
router.post('/sprint53/change-payment-status', function(req, res) {
  if (req.body['returned'] === 'yes') {
    res.redirect('payment-returned-1');
  } else {
    res.redirect('payment');
  }
});

// STOP PAYMENTS - OPTED OUT ---------------------------------------------------------
router.post('/sprint53/stop-payments', function(req, res) {
  if (req.body['stop-payments'] === 'yes') {
    res.redirect('payment-opted-out');
  } else {
    res.redirect('payment');
  }
});

// START PAYMENTS - OPTED IN ---------------------------------------------------------
router.post('/sprint53/start-payments', function(req, res) {
  if (req.body['start-payments'] === 'yes') {
    res.redirect('payment-opted-in');
  } else {
    res.redirect('payment-opted-out');
  }
});

module.exports = router;
