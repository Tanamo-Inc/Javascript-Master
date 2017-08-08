function users(name, sex, country) {
    this.name = name;
    this.sex = sex;
    this.country = country;
};

var u1 = new users("Tandoh", "Male", "Ghana")
var u2 = new users("Woode", "Male", "USA")
var u3 = new users("Yankey", "Male", "China")
var u4 = new users("Tano", "Male", "France")
var u5 = new users("Antoinette", "Female", "Ghana")
var u6 = new users("Mary", "Female", "England")
var u7 = new users("Getrude", "Female", "Ghana")
var u8 = new users("Gloria", "Female", "USA")


document.writeln("<br>");
document.write("Name : " + u1.name, "  Sex : " + u1.sex, "   Country : " + u1.country);
document.writeln("<br>");
document.write("Name : " + u2.name, "  Sex : " + u2.sex, "   Country : " + u2.country);
document.writeln("<br>");
document.write("Name : " + u3.name, "  Sex : " + u3.sex, "   Country : " + u3.country);
document.writeln("<br>");
document.write("Name : " + u4.name, "  Sex : " + u4.sex, "   Country : " + u4.country);
document.writeln("<br>");
document.write("Name : " + u5.name, "  Sex : " + u5.sex, "   Country : " + u5.country);
document.writeln("<br>");
document.write("Name : " + u6.name, "  Sex : " + u6.sex, "   Country : " + u6.country);
document.writeln("<br>");
document.write("Name : " + u7.name, "  Sex : " + u7.sex, "   Country : " + u7.country);
document.writeln("<br>");
document.write("Name : " + u8.name, "  Sex : " + u8.sex, "   Country : " + u8.country);
