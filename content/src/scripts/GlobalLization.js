const translate = (element) => {
    switch (element.innerHTML) {
        case "颜色分类":
            element.innerHTML = "Thể loại màu:";
            break;
        case "尺寸":
            element.innerHTML = "Kích thước:";
            break;
        case "月销量":
            element.innerHTML = "Luong hang ban trong mot thang:";
            break;
        case "数量":
            element.innerHTML = "Số lượng:";
            break;
    }
}

export const translateChineseToVietnamese = (node) => {
    Array.prototype.slice.call(node).map(translate);// turn it into an array then loop through them and check the name
}


