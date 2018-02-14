(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
   
	function solution(map) {
		function test(map, i, j, value) {
        if (map[i] && map[i][j] === -1) {
            map[i][j] = value;
            test(map, i -1, j, value);
            test(map, i + 1, j, value);
            test(map, i, j - 1, value);
            test(map, i, j + 1, value);
            return true;
        }
    }
    var value = 1;

    map.forEach(a=> a.forEach((b, i, bb) => bb[i] = -b));
    map.forEach((a, i, aa) => a.forEach((b, j) => test(aa, i, j, value) && value++));
		
    return value - 1;
}
		
      
     

    root.SHRI_ISLANDS.solution = solution;
})(this);
