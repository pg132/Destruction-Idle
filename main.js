




function newPlayer(){
    player = {
        money: new Decimal (0),
        regions: {
            city: {
                total: new Decimal (0),
                need: 10 +  (int)(Math.random()*(41))
            },
            region: {
                total: new Decimal (0),
                need: 10 +  (int)(Math.random()*(41))
            },
            country: {
                toal: new Decimal (0),
                need: 10 +  (int)(Math.random()*(41))
            },
            continent: {
                total: new Decimal (0),
                need: 10 +  (int)(Math.random()*(41))
            },
            planet: {
                total: new Decimal (0),
                need: 10 +  (int)(Math.random()*(41))
            },
            solarSystem: {
                total: new Decimal (0),
                need: 10 +  (int)(Math.random()*(41))
            },
            starCluster: {
                total: new Decimal (0),
                need: 10 +  (int)(Math.random()*(41))
            },
            galaxy: {
                total:new Decimal (0),
                need: 10 +  (int)(Math.random()*(41))
            },
            galaxyCluster: {
                total:new Decimal(0),
                need: 10 +  (int)(Math.random()*(41))
            },
            superCluster: {
                total: new Decimal (0),
                need: 10 +  (int)(Math.random()*(41))
            },
            galactic: {
                total: new Decimal(0),
                need: 10 +  (int)(Math.random()*(41))
            },
            universe: {
                total:new Decimal (0),
                need: 10 +  (int)(Math.random()*(41))
            },
            multiverse: {
                total:new Decimal(0),
                need: 10 +  (int)(Math.random()*(41))
            }
        },
        baseDPS: new Decimal (1),
        minions: {
            total: new Decimal (1),
            used: new Decimal (0),
            free: new Decimal (1),
            damage: new Decimal (0.1),
            dpsType: new Decimal (0),
            multiplierType: new Decimal (0),
            upgradeType: new Decimal (0)
        },
    
      
      
      
    }
}
  
  
  
  
  







