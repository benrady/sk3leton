describe("App", function() {
  beforeEach(function() {
    appOnReady();
  });

  it('should do something', function() {
    expect($('.main-container h1').text()).toEqual("Something Better");
  });
});
