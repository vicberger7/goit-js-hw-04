function calcAverageCalories(days) {
    let totalCalories = 0;

    for (let i = 0; i < days.length; i++) {
      totalCalories += days[i].calories;
    }
  
    return totalCalories / days.length;
}
