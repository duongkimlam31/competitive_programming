function fair_candy_swap(alice_sizes, bob_sizes){
  let alice_total = 0;
  let bob_total = 0;

  let bob_set = new Set();

  for (let i = 0; i < alice_sizes.length; i++){
    alice_total += alice_sizes[i];
  }

  for (let i = 0; i < bob_sizes.length; i++){
    bob_total += bob_sizes[i];
    bob_set.add(bob_sizes[i]);
  }


  let results = [-1,-1];

  for (let i = 0; i < alice_sizes.length; i++){
    let alice_to_give = alice_sizes[i];
    let tmp_alice_total = alice_total;
    let tmp_bob_total = bob_total;

    tmp_alice_total -= alice_to_give;
    tmp_bob_total += alice_to_give;

    let tmp_equal_total = (tmp_alice_total + tmp_bob_total) / 2
    let bob_to_give = tmp_bob_total - tmp_equal_total;

    if (bob_set.has(bob_to_give)){
      results[0] = alice_to_give;
      results[1] = bob_to_give;
      break;
    }

  }
  return results;
}


alice_sizes = [1,1]
bob_sizes = [2,2]
console.log(fair_candy_swap(alice_sizes, bob_sizes));

alice_sizes = [1,2]
bob_sizes = [2,3]
console.log(fair_candy_swap(alice_sizes, bob_sizes));

alice_sizes = [2]
bob_sizes = [1,3]
console.log(fair_candy_swap(alice_sizes, bob_sizes));