
/**a.You need to have a way of grouping all your Inventory cars by Brand.**/

SELECT b.name
FROM CarInventory ci
LEFT JOIN Model m
ON ci.modelId = m.id
LEFT JOIN Brand b
ON m.brandId = b.id
GROUP BY b.name;

/** b. Given a car Model, you need to be able to display all the ActualCarFeatures for
all the cars that are currently in your Inventory. **/

SELECT cf.carId, cf.featureId, pf.name AS FeatureName, m.name AS CarModel
FROM CarFeatures cf
LEFT JOIN CarInventory ci
ON cf.carId = ci.id
LEFT JOIN PossibleFeatures pf
ON cf.featureId = pf.id
LEFT JOIN Model m
ON ci.modelId = m.id
WHERE m.name LIKE 'A4'
ORDER BY cf.carId;

/* c. Given a car Model, you need to be able to display all its Possible Car Features. */

SELECT pf.id AS FeatureId, pf.name AS FeatureName, m.name AS Model 
FROM PossibleFeatures pf
LEFT JOIN Model_PossibleFeatures mpf
ON pf.id = mpf.featureId
LEFT JOIN Model m
ON mpf.modelId = m.id
WHERE m.name LIKE 'MODEL X';

/* d. You need to know all the customers who bought cars to in the past month, in
order to check for their feedback. */

SELECT c.id, c.name, cp.carId, cp.purchaseDate, m.name AS Model
FROM Customer c
LEFT JOIN CustomerPurchase cp
ON c.id = cp.customerId
LEFT JOIN CarInventory ci
ON cp.carId = ci.id
LEFT JOIN Model m
ON ci.modelId = m.id
WHERE cp.purchaseDate > DATEADD(month, -1, GETDATE());

/* e. You need to know all the customers who expressed interest in a car the past
month but did not end up buying it, in order to be able to contact them and
persuade them to buy it. */

SELECT *
FROM PotentialCustomer pc
LEFT JOIN PotentialCustomer_Model pcm
ON pc.id = pcm.potentialCustomerId
WHERE pcm.data > DATEADD(month, -1, GETDATE());

/* f. Given a certain fabrication year, you need to display all the cars in your
inventory that were produced that year. */

SELECT ci.id AS carId, m.name as Model, ci.year, ci.price
FROM CarInventory ci
LEFT JOIN Model m
on ci.modelId = m.id
WHERE year = 2021;

/* g. Given a certain price range, you need to be able to present the range of Models
to your potential customers. */

SELECT ci.id AS carId, m.name as Model, ci.year, ci.price
FROM CarInventory ci
LEFT JOIN Model m
on ci.modelId = m.id
WHERE ci.price BETWEEN 30000 AND 45000;

/* h. Given a certain feature (Diesel vs Gas vs Electric/ Manual vs Automatic etc), you
need to be able to present a range of cars in your Inventory to your potential
customers for a test drive. */ 

SELECT cf.carId, cf.featureId, pf.name AS FeatureName, m.name AS CarModel
FROM CarFeatures cf
LEFT JOIN CarInventory ci
ON cf.carId = ci.id
LEFT JOIN PossibleFeatures pf
ON cf.featureId = pf.id
LEFT JOIN Model m
ON ci.modelId = m.id
WHERE pf.name LIKE 'Electric'
ORDER BY cf.carId;
