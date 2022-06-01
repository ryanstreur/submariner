const paywallBarSelectors = {
  "www.wired.com": "aside.paywall-bar",
};

if (location.host in paywallBarSelectors) {
  const selector = paywallBarSelectors[location.host];
  exponentialBackoff(() => removePaywallBar(selector))();
}

function removePaywallBar(selector) {
  console.debug("Running removePaywallBar")

  if (paywallBar) {
    console.debug(`Removing paywall bar with selector ${selector}`)
    paywallBar.remove();
    return true;
  }
}

function exponentialBackoff(fn, timeout = 1000, multiplier = 2) {
  console.log('running exponentialBackoff')
  return function() {
    const out = fn();
    if (out || timeout >= 6e12) {
      return;
    }

    const timer = timeout * 2;
    const seconds = timer / 1000;
    console.debug(`Paywall Bar Not found, setting exponential backoff for ${seconds}s.`);
    setTimeout(exponentialBackoff(fn, timer, multiplier), timer)
  }
}
