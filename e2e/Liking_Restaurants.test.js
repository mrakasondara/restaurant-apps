const assert = require("assert");

Feature("Liking and Review Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.see("Data Favorit Tidak Ada", "h6");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("Data Favorit Tidak Ada", "h6");

  I.amOnPage("/");

  I.seeElement(".name a");
  const firstRestaurant = locate(".name a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement("restaurant-item");
  const likedRestaurantTitle = await I.grabTextFrom(".name a");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario("failed review a restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.see("Restaurant List", "h3");

  I.seeElement(".name a");
  const firstRestaurant = locate(".name a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  const clickedRestaurantTitle = await I.grabTextFrom(".header .name");

  I.seeElement("add-reviews");
  I.click("form button");
  I.seeElement("alert-app .error");

  I.fillField("#name", "tester1");
  I.click("form button");
  I.seeElement("alert-app .error");

  I.fillField("#reviews", "good restaurant");
  I.click("form button");
  I.seeElement("alert-app .error");

  assert.strictEqual(firstRestaurantTitle, clickedRestaurantTitle);
});

Scenario("success review a restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.see("Restaurant List", "h3");

  I.seeElement(".name a");
  const firstRestaurant = locate(".name a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  const clickedRestaurantTitle = await I.grabTextFrom(".header .name");

  I.fillField("#name", "tester1");
  I.fillField("#reviews", "good restaurant");
  I.click("form button");
  I.seeElement("alert-app .success");

  assert.strictEqual(firstRestaurantTitle, clickedRestaurantTitle);
});
