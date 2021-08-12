// delete this.key
/**Bài 1. Tạo 1 Object có thuộc tính books kiểu Array để lưu danh sách các cuốn sách. 1 phần tử sẽ gồm các thuộc tính 
  id, tên sách, tên tác giả, ngày xuất bản, giá bìa, có còn đang xuất bản không.
   Hãy viết các phương thức có yêu cầu dưới đây cho Object trên:
 
a.	Thêm mới 1 cuốn sách. Chú ý id của sách khi thêm mới vào phải tự tăng, bắt đầu từ 1.
b.	Lấy ra tất cả sách và lấy ra 1 cuốn sách theo id.
c.	Xoá đi 1 cuốn sách.
d.	Lọc ra các sách đang xuất bản.
e.	Lấy ra chỉ có tên sách và ngày xuất bản của tất cả cuốn sách. 
f.	Lọc ra các sách theo tên sách hoặc tên tác giả. Phương thức nhận tham số truyền vào là một chuỗi.
g.	Phương thức tính tổng giá bìa của tất cả cuốn sách.

*/

function BookConstructor( bookTitle, publicDate, price, isGoingPublic) {
    // this.id = id;
    this.bookTitle = bookTitle;
    this.publicDate = publicDate;
    this.price = price;
    this.isGoingPublic = isGoingPublic;
}
var book1 = new BookConstructor('dac nhan tam','21/05/2021',3000,true);
var book2 = new BookConstructor('dac nhan tam','27/04/2021',3500,true);
var book3 = new BookConstructor('giai tich','27/07/1994',2000,false);
var book4 = new BookConstructor('ngu van','17/08/1997',2500,true);
var book5 = new BookConstructor('sinh hoc','04/07/1987',2000,false);
var book6 = new BookConstructor('bay buoc toi mua he','15/07/2021',5000,true);
var book7 = new BookConstructor('vat ly','04/07/1980',1000,false);


var books = [];
books.push(book1);
books.push(book2);
books.push(book3);
books.push(book4);
books.push(book5);
books.push(book6);
books.push(book7);

// câu b: ko in vì nó dài
// var getAllBooks = books.forEach((curr,index)=>{
//     console.log(curr);
//     if(index === 1){
//         console.log(curr);
//     }
// })

// câu c
function deleteElement(start,wantToDelete)  {
    books.splice(start,wantToDelete);
    return books;
}
console.log(deleteElement(1,1)); 
// câu d
var isGoingPublicBook = books.filter((curr)=>{
    return curr.isGoingPublic==true;
})
console.log(isGoingPublicBook);


// câu e: bug
var a = [];
function titleAndDatePublic() {
    
    books.forEach((curr,index)=>{
        a.push(curr.bookTitle);
        console.log(a)
    }) 
};

// câu F:
// var filterByTitle = books.filter((curr)=>{
//     return curr.bookTitle=='giai tich';
// })
// console.log(filterByTitle);

function filterByTitle1(title){
    var a = [];
    books.filter((curr)=>{
        if(curr.bookTitle==title) a.push(curr) ;
    })
    console.log(a);
}

filterByTitle1('dac nhan tam');

// câu g:
function sumOfPrice(books){
    var sum = 0;
    books.forEach((curr)=>{
        sum+=curr.price;
        
    })
    return sum;
}

console.log(sumOfPrice(books));

/**Bài 2. Sử dụng Object ở bài 1 để thực hiện các yêu cầu dưới đây:
a.	Thêm 5 cuốn sách tuỳ thích.
b.	In ra thông tin các sách đã thêm vào, sách có id bằng 3, các sách có tên tác giả hoặc tên sách có chứa ký tự ‘n’ và các sách đã xuất bản.
c.	In ra tổng giá bìa các cuốn sách.
 */

// câu a: ko in ra vi no dai
// var allBooks = books.values();
// for(let elements of allBooks) {
//     console.log(elements);
// }

// câu b:
function filterByCharacter(character){
    var temp= [];
    books.forEach((curr)=>{
        if(curr.bookTitle.includes(character)==true){
            temp.push(curr);
        }
    })
    console.log(temp);
}
filterByCharacter('n')

// câu c: tương tụ câu g bài 1







/**Bài 3. Viết function isEven nhận vào một tham số, kiểm tra xem tham số đó chẵn hay lẻ và trả về một Promise.
 *  Promise sẽ Resolve kết quả kiểm tra, nếu biến đó không phải số thì Reject ra chuỗi “Không phải là số”. Sau đó hãy thực hiện:
a.	Gọi isEven để kiểm tra số 1 và 2.
b.	Dùng .then, .catch gọi isEven tuần tự kiểm tra các giá trị 1, 2, 3. Sau đó tuần tự kiểm tra các giá trị 1, ‘a’, 2.
c.	Dùng .all để thực hiện phần b.
d.	Dùng async/await thực hiện phần b và c.
e.	Dùng .finally để in ra chữ “Đã kiểm tra” sau khi chạy xong.
 */




var isEven = (testNumber) => {
    return new Promise((resolve, reject) => {
        if (typeof testNumber === 'number') {
            if (testNumber % 2 == 0) {
                resolve(testNumber);
            }
            else {
                resolve(testNumber);
            }
        }
        else {
            reject('ko phai la so!')
        }
    })
}

isEven(100)
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })


isEven("abc")
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })


isEven(201)
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })


Promise.all([isEven(1001), isEven(2000), isEven('gbc')])
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Done!')
    })