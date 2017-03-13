document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});


function runCustomTests() {
  suite('Check px.d3 exists', function() {
    test('Px.d3 exists', function() {
      assert.isDefined(Px.d3);
    });

    test('Px.d3 is v4', function() {
      assert.isDefined(Px.d3);
    });
  });
}
