import org.apache.spark.sql.SparkSession

object city {
	def main(args: Array[String]): Unit = {
//		best_quality()
		worst_quality()
	}
	def best_quality() = {

		// 生成SparkSession对象
		val spark = SparkSession.builder().master("local[*]").appName("demo1").getOrCreate()
		// 隐式转换
		// 集群运行
		val df = spark.read.option("header", true).option("infer schema", true)
			.csv("hdfs://192.168.50.134:9000/bigdata/input/global_air_pollution_dataset.csv")
		// 显示表模式
		df.printSchema()
		df.createOrReplaceTempView("tab")
		val avgAQI = spark.sql("select City, " +
			"round(avg(`AQI Value`), 2) as avg_AQI, " +
			"round(avg(`PM2.5 AQI Value`), 2) as avg_PM2_5, " +
			"round(avg(`Ozone AQI Value`), 2) as avg_O3, " +
			"round(avg(`NO2 AQI Value`), 2) as avg_NO2 " +
			"from tab " +
			"where `AQI Value` >= 0 " +
			"and `PM2.5 AQI Value` >= 0 " +
			"and `Ozone AQI Value` >= 0 " +
			"and `NO2 AQI Value` >= 0 " +
			"group by City " +
			"order by avg_AQI desc limit 20")
		avgAQI.show()
		// 建立一个新的视图
		//		avgAQI.repartition(1).write.format("csv").save("file:///D://Users//fanny//Desktop//best-air-quality.csv")
		spark.close()
	}

	def worst_quality() = {
		// 生成SparkSession对象
		val spark = SparkSession.builder().master("local[*]").appName("demo1").getOrCreate()
		// 隐式转换
		// 集群运行
		val df = spark.read.option("header", true).option("infer schema", true)
			.csv("hdfs://192.168.50.134:9000/bigdata/input/global_air_pollution_dataset.csv")
		// 显示表模式
		df.printSchema()

		df.createOrReplaceTempView("tab")
		val avgAQI = spark.sql("select City, " +
			"round(avg(`AQI Value`), 2) as avg_AQI, " +
			"round(avg(`PM2.5 AQI Value`), 2) as avg_PM2_5, " +
			"round(avg(`Ozone AQI Value`), 2) as avg_O3, " +
			"round(avg(`NO2 AQI Value`), 2) as avg_NO2 " +
			"from tab " +
			"where `AQI Value` >= 0 " +
			"and `PM2.5 AQI Value` >= 0 " +
			"and `Ozone AQI Value` >= 0 " +
			"and `NO2 AQI Value` >= 0 " +
			"group by City " +
			"order by avg_AQI limit 20")
		avgAQI.show()
		// 建立一个新的视图
		//		avgAQI.repartition(1).write.format("csv").save("file:///D://Users//fanny//Desktop//worst-air-quality.csv")
		spark.close()
	}
}
