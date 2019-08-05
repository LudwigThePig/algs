# https://leetcode.com/problems/reverse-integer/
def reverse(x)
  neg = x < 0 ? -1 : 1
  res = neg * (x.abs.to_s.reverse.to_i)
  (res < -2147483648 || res > 2147483647) ? 0 : res
end


# https://leetcode.com/problems/remove-duplicates-from-sorted-array/
# Cheeky answer
def remove_duplicates(nums)
  nums.uniq!
  nums.length
end

def remove_duplicates2(nums)
  if nums.empty? 
      return 0 
  end
  uniq = 1
  i = 0
  while uniq < nums.length
      if nums[i] != nums[uniq]
          i += 1
          nums[i] = nums[uniq]
      end        
      uniq += 1
  end
  i + 1
end




# https://leetcode.com/problems/maximum-subarray/submissions/
def max_sub_array(nums)
  best, cur = nums[0], 0
  nums.each do |n|
      best = [best, cur = [n, cur+n].max].max 
  end
  best
end