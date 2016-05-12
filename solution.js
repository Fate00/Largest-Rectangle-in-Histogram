/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
	if (heights.length == 0)
		return 0;

	var max = 0;
	var st = [];
	for (var i = 0; i <= heights.length; i++) {
		var cur = (i == heights.length)? -1 : heights[i];
		while (st.length != 0 && cur <= heights[st[st.length - 1]]) {
			var h = heights[st.pop()];
			var w = (st.length == 0)? i : i - st[st.length - 1] - 1;
			max = Math.max(max, h * w);
		}
		st.push(i);
	}
	return max;
};