import Product from "../models/productModel.js";

//get all transaction as per month regardless of year and should have search filter on (title,disc,price) with pagination 1-10 (1 page)
export const getTransactionsMonthly = async (req, res) => {
  const { month, search } = req.query;
  try {
    //to select month
    const query = {
      $expr: {
        $eq: [{ $month: "$dateOfSale" }, month],
      },
    };
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { price: { $eq: parseFloat(search) || 0 } },
      ];
    }
    const transactions = await Product.find(query);
    if (!transactions) {
      res
        .status(200)
        .json({ status: "Ok", msg: "No transation for given month" });
    }
    res.status(200).json({
      status: "Ok",
      msg: "transation found successfully",
      data: transactions,
    });
  } catch (error) {
    res.status(500).json({ msg: "internal server error", err: error.message });
  }
};

//total sale amount, total number of sold items and total number of not sold items of selected month
export const getStatistics = async (req, res) => {
  const month  = req.params.month;
  try {
    const transactions = await Product.find({
      $expr: {
        $eq: [{ $month: "$dateOfSale" }, month],
      },
    });

    const totalSaleAmount = transactions.reduce(
      (total, transaction) => total + transaction.price,
      0
    );
    const totalSoldItems = transactions.filter(
      (transaction) => transaction.sold
    ).length;
    const totalNotSoldItems = transactions.length - totalSoldItems;

    res.status(200).json({
      status: "Ok",
      data: { totalSaleAmount, totalSoldItems, totalNotSoldItems },
    });
  } catch (error) {
    res.status(500).json({ msg: "internal server error", err: error.message });
  }
};

//for bar-chart the response should contain price range and the number of items in that range for the selected month regardless of the year
export const getBarChartData = async (req, res) => {
  const month  = req.params.month;

  try {
    const transactions = await Product.find({
      $expr: {
        $eq: [{ $month: "$dateOfSale" }, month],
      },
    });

    const priceRanges = {
      "0-100": 0,
      "101-200": 0,
      "201-300": 0,
      "301-400": 0,
      "401-500": 0,
      "501-600": 0,
      "601-700": 0,
      "701-800": 0,
      "801-900": 0,
      "901-above": 0,
    };

    transactions.forEach((t) => {
      if (t.price <= 100) priceRanges["0-100"]++;
      else if (t.price <= 200) priceRanges["101-200"]++;
      else if (t.price <= 300) priceRanges["201-300"]++;
      else if (t.price <= 400) priceRanges["301-400"]++;
      else if (t.price <= 500) priceRanges["401-500"]++;
      else if (t.price <= 600) priceRanges["501-600"]++;
      else if (t.price <= 700) priceRanges["601-700"]++;
      else if (t.price <= 800) priceRanges["701-800"]++;
      else if (t.price <= 900) priceRanges["801-900"]++;
      else priceRanges["901-above"]++;
    });

    res.status(200).json({
      status: "Ok",
      msg: "send prise range successfully",
      data: priceRanges,
    });
  } catch (error) {
    res.status(500).json({ msg: "internal server error", err: error.message });
  }
};

// unique categories and number of items from that category for the selected month regardless of the year. eg. x category=20 item
export const getPieChartData = async (req, res) => {
  const month  = req.params.month;

  try {
    const transactions = await Product.find({
      $expr: {
        $eq: [{ $month: "$dateOfSale" }, month],
      },
    });
// const categories = transactions.reduce((total, transaction) => {
//       total[transaction.category] = (total[transaction.category] || 0) + 1;
//       return total;
//     },{});
const categoryQuantities = Object.entries(
  transactions.reduce((total, transaction) => {
    total[transaction.category] = (total[transaction.category] || 0) + 1;
    return total;
  }, {})
).map(([label, value]) => ({ label, value }));
// console.log(categoryQuantities);
    
    res.status(200).json({
      status: "Ok",
      msg: "send pie chart data successfully",
      data: categoryQuantities,
    });
  } catch (error) {
    res.status(500).json({ msg: "internal server error", err: error.message });
  }
};

//API which fetches the data from all the 3 APIs (getStatistics,getBarChart,getPieChart) mentioned above, combines the response and sends a final response of the combined JSON
export const getCombinedData = async (req, res) => {
  const month  = req.params.month;
  try {
    const statistics= await getStatistics(req, res);
    const barChart= await getBarChartData(req, res);
    const pieChart= await getPieChartData(req, res);

    res.status(200).json({
      status: "Ok",
      msg: "send prise range successfully",
      data: {
        statistics: statistics,
        barChart: barChart,
        pieChart: pieChart,
      },
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "internal server error", err: error.message });
  }
};
