# https://leetcode.com/problems/reverse-integer/
def reverse(x)
  neg = x < 0 ? -1 : 1
  res = neg * (x.abs.to_s.reverse.to_i)
  (res < -2147483648 || res > 2147483647) ? 0 : res
end

