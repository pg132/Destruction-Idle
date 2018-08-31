


function triangleNum(x){
    return x*(x+1)/2
}

var minionUpgUnlocks = [triangleNum(1),triangleNum(2),triangleNum(3),triangleNum(4),triangleNum(5),triangleNum(6),triangleNum(7),triangleNum(8),triangleNum(9),triangleNum(10),triangleNum(11),triangleNum(12)]
var minionUpgs = []


function getMinionUpgrades(){
    let k = 0
    for (i=0;i<minionUpgUnlocks.length;i++){
        if (player.minions.amount > minionUpgUnlocks[i]) k += 1
    }
    // k is number of upgs now just to return each of them
    let j = []
    for (i=0;i<k;i++){
        if (minionUpgs.length<=i) break
        j += [minionUpgs[i]]
    }
    return j
}
