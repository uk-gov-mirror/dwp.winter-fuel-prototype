const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/sprint31a/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/sprint31a/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/sprint31a/find', (req, res) => {
    res.redirect('/sprint31a/find-1')
  })
  ;

  // Find result to security
  router.post('/sprint31a/find-1', (req, res) => {
    res.redirect('/sprint31a/security')
  })
  ;

  // Security into record with security confirmation box
  router.post('/sprint31a/security', (req, res) => {
    res.redirect('/sprint31a/overview-security')
  })
  ;

  // CONTACT CHANGES -----------------------------------------------------------

  // Home phone number change back to contact
  router.post('/sprint31a/homephone', (req, res) => {
    res.redirect('/sprint31a/contact')
  })
  ;

  // Home phone number removal
  router.post('/sprint31a/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/sprint31a/workphone', (req, res) => {
    res.redirect('/sprint31a/contact')
  })
  ;

  // Work phone number removal
  router.post('/sprint31a/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/sprint31a/mobilephone', (req, res) => {
    res.redirect('/sprint31a/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/sprint31a/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/sprint31a/email', (req, res) => {
    res.redirect('/sprint31a/contact')
  })
  ;

  // Email removal
  router.post('/sprint31a/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/sprint31a/contact-preferences', (req, res) => {
    res.redirect('/sprint31a/contact')
  })
  ;

  // Address -----------------------------

  router.post('/sprint31a/address', (req, res) => {
    res.redirect('/sprint31a/address-1')
  })
  ;

  router.post('/sprint31a/address-1', (req, res) => {
    res.redirect('/sprint31a/move-date')
  })
  ;

  router.post('/sprint31a/move-date', (req, res) => {
    res.redirect('/sprint31a/living-with')
  })
  ;



  // Change of address and home phone number
  router.post('/sprint31a/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Living with anyone at address change
  router.post('/sprint31a/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Living with someone else of State Pension age' ) {
      res.redirect('contact');
    } else {
      res.redirect('make-payment');
    }
  });

  // Check to payments
  router.post('/sprint31a/check', (req, res) => {
    res.redirect('/sprint31a/make-payment')
  })
  ;

  // Make payment to contact
  router.post('/sprint31a/make-payment', (req, res) => {
    res.redirect('/sprint31a/contact-1')
  })
  ;



  // Living with age back to contact
  router.post('/sprint31a/living-with-age', (req, res) => {
    res.redirect('/sprint31a/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details change to bank confirm
  router.post('/sprint31a/bankdetails', (req, res) => {
    res.redirect('/sprint31a/confirm-bank')
  })
  ;

  // Bank confirm to payment
  router.post('/sprint31a/confirm-bank', (req, res) => {
    res.redirect('/sprint31a/payment')
  })
  ;

  // Reissue payment to payment with confirmation and updated
  router.post('/sprint31a/reissue-payment', (req, res) => {
    res.redirect('/sprint31a/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/sprint31a/stop-payments', function(req, res) {
    if ( req.body['stop-payments'] === 'Yes' ) {
      res.redirect('payment-stopped');
    } else {
      res.redirect('payment');
    }
  });

  // Starting payments
  router.post('/sprint31a/start-payments', function(req, res) {
    if ( req.body['start-payments'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('payment-stopped');
    }
  });

  module.exports = router;
