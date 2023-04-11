# 常用算法

## 排序

### 冒泡排序

- 比较相邻的元素。如果第一个比第二个大，就交换它们两个；

- 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；

- 针对所有的元素重复以上的步骤，除了最后一个；

- 重复步骤 1~3，直到排序完成。

#### 代码

```
function bubbleSort(arr) {

    var len = arr.length;

    for (var i = 0; i < len - 1; i++) {

        for (var j = 0; j < len - 1 - i; j++) {

            if (arr[j] > arr[j+1]) {       // 相邻元素两两对比

                var temp = arr[j+1];       // 元素交换

                arr[j+1] = arr[j];

                arr[j] = temp;

            }

        }

    }

    return arr;

}
```

### 选择排序

n 个记录的直接选择排序可经过 n-1 趟直接选择排序得到有序结果。具体算法描述如下：

- 初始状态：无序区为 R[1..n]，有序区为空；

- 第 i 趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为 R[1..i-1]和 R(i..n）。该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第 1 个记录 R 交换，使 R[1..i]和 R[i+1..n)分别变为记录个数增加 1 个的新有序区和记录个数减少 1 个的新无序区；

- n-1 趟结束，数组有序化了

#### 代码

```

function selectionSort(arr) {

    var len = arr.length;

    var minIndex, temp;

    for (var i = 0; i < len - 1; i++) {

        minIndex = i;

        for (var j = i + 1; j < len; j++) {

            if (arr[j] < arr[minIndex]) {    // 寻找最小的数

                minIndex = j;                // 将最小数的索引保存

            }

        }

        temp = arr[i];

        arr[i] = arr[minIndex];

        arr[minIndex] = temp;

    }

    return arr;

}
```

### 插入排序

- 从第一个元素开始，该元素可以认为已经被排序；

- 取出下一个元素，在已经排序的元素序列中从后向前扫描；

- 如果该元素（已排序）大于新元素，将该元素移到下一位置；

- 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；

- 将新元素插入到该位置后；

- 重复步骤 2~5

#### 代码

```

function insertionSort(arr) {

    var len = arr.length;

    var preIndex, current;

    for (var i = 1; i < len; i++) {

        preIndex = i - 1;

        current = arr[i];

        while (preIndex >= 0 && arr[preIndex] > current) {

            arr[preIndex + 1] = arr[preIndex];

            preIndex--;

        }

        arr[preIndex + 1] = current;

    }

    return arr;

}
```
