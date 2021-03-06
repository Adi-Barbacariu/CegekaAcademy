USE [master]
GO
/****** Object:  Database [CarDealer]    Script Date: 3/29/2021 9:11:20 AM ******/
CREATE DATABASE [CarDealer]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CarDealer', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\CarDealer.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CarDealer_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\CarDealer_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [CarDealer] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CarDealer].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CarDealer] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CarDealer] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CarDealer] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CarDealer] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CarDealer] SET ARITHABORT OFF 
GO
ALTER DATABASE [CarDealer] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CarDealer] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CarDealer] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CarDealer] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CarDealer] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CarDealer] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CarDealer] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CarDealer] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CarDealer] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CarDealer] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CarDealer] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CarDealer] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CarDealer] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CarDealer] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CarDealer] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CarDealer] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CarDealer] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CarDealer] SET RECOVERY FULL 
GO
ALTER DATABASE [CarDealer] SET  MULTI_USER 
GO
ALTER DATABASE [CarDealer] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CarDealer] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CarDealer] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CarDealer] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CarDealer] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CarDealer] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'CarDealer', N'ON'
GO
ALTER DATABASE [CarDealer] SET QUERY_STORE = OFF
GO
USE [CarDealer]
GO
/****** Object:  Table [dbo].[Brand]    Script Date: 3/29/2021 9:11:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Brand](
	[id] [nchar](10) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Brand] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CarFeatures]    Script Date: 3/29/2021 9:11:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CarFeatures](
	[featureId] [nchar](10) NOT NULL,
	[carId] [nchar](10) NOT NULL,
 CONSTRAINT [PK_CarFeatures] PRIMARY KEY CLUSTERED 
(
	[featureId] ASC,
	[carId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CarInventory]    Script Date: 3/29/2021 9:11:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CarInventory](
	[id] [nchar](10) NOT NULL,
	[modelId] [nchar](10) NOT NULL,
	[year] [int] NOT NULL,
	[price] [int] NOT NULL,
 CONSTRAINT [PK_CarInventory] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 3/29/2021 9:11:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[id] [nchar](10) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerPurchase]    Script Date: 3/29/2021 9:11:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerPurchase](
	[customerId] [nchar](10) NOT NULL,
	[carId] [nchar](10) NOT NULL,
	[purchaseDate] [date] NOT NULL,
 CONSTRAINT [PK_CustomerPurchase] PRIMARY KEY CLUSTERED 
(
	[customerId] ASC,
	[carId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Model]    Script Date: 3/29/2021 9:11:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Model](
	[id] [nchar](10) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[brandId] [nchar](10) NOT NULL,
 CONSTRAINT [PK_Model] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Model_PossibleFeatures]    Script Date: 3/29/2021 9:11:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Model_PossibleFeatures](
	[modelId] [nchar](10) NOT NULL,
	[featureId] [nchar](10) NOT NULL,
 CONSTRAINT [PK_Model_PossibleFeatures] PRIMARY KEY CLUSTERED 
(
	[modelId] ASC,
	[featureId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PossibleFeatures]    Script Date: 3/29/2021 9:11:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PossibleFeatures](
	[id] [nchar](10) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_PossibleFeatures] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PotentialCustomer]    Script Date: 3/29/2021 9:11:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PotentialCustomer](
	[id] [nchar](10) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_PotentialCustomer] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PotentialCustomer_Model]    Script Date: 3/29/2021 9:11:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PotentialCustomer_Model](
	[potentialCustomerId] [nchar](10) NOT NULL,
	[modelId] [nchar](10) NOT NULL,
	[data] [date] NULL,
 CONSTRAINT [PK_PotentialCustomer_Model] PRIMARY KEY CLUSTERED 
(
	[potentialCustomerId] ASC,
	[modelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Brand] ([id], [name]) VALUES (N'1         ', N'AUDI')
INSERT [dbo].[Brand] ([id], [name]) VALUES (N'2         ', N'MERCEDES')
INSERT [dbo].[Brand] ([id], [name]) VALUES (N'3         ', N'TESLA')
GO
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'1         ', N'1         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'1         ', N'3         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'2         ', N'2         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'2         ', N'4         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'3         ', N'5         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'3         ', N'6         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'4         ', N'1         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'4         ', N'2         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'4         ', N'3         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'4         ', N'4         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'4         ', N'5         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'4         ', N'6         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'5         ', N'1         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'5         ', N'2         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'5         ', N'3         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'5         ', N'4         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'5         ', N'6         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'6         ', N'1         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'6         ', N'3         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'6         ', N'4         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'6         ', N'5         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'7         ', N'1         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'7         ', N'2         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'7         ', N'3         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'7         ', N'4         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'7         ', N'5         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'7         ', N'6         ')
INSERT [dbo].[CarFeatures] ([featureId], [carId]) VALUES (N'8         ', N'1         ')
GO
INSERT [dbo].[CarInventory] ([id], [modelId], [year], [price]) VALUES (N'1         ', N'1         ', 2020, 40000)
INSERT [dbo].[CarInventory] ([id], [modelId], [year], [price]) VALUES (N'2         ', N'1         ', 2021, 50000)
INSERT [dbo].[CarInventory] ([id], [modelId], [year], [price]) VALUES (N'3         ', N'6         ', 2021, 80000)
INSERT [dbo].[CarInventory] ([id], [modelId], [year], [price]) VALUES (N'4         ', N'6         ', 2020, 60000)
INSERT [dbo].[CarInventory] ([id], [modelId], [year], [price]) VALUES (N'5         ', N'8         ', 2017, 45000)
INSERT [dbo].[CarInventory] ([id], [modelId], [year], [price]) VALUES (N'6         ', N'9         ', 2021, 100000)
GO
INSERT [dbo].[Customer] ([id], [name]) VALUES (N'1         ', N'John')
INSERT [dbo].[Customer] ([id], [name]) VALUES (N'2         ', N'Mike')
INSERT [dbo].[Customer] ([id], [name]) VALUES (N'3         ', N'Jane')
GO
INSERT [dbo].[CustomerPurchase] ([customerId], [carId], [purchaseDate]) VALUES (N'1         ', N'1         ', CAST(N'2021-03-28' AS Date))
INSERT [dbo].[CustomerPurchase] ([customerId], [carId], [purchaseDate]) VALUES (N'2         ', N'2         ', CAST(N'2020-12-25' AS Date))
INSERT [dbo].[CustomerPurchase] ([customerId], [carId], [purchaseDate]) VALUES (N'3         ', N'3         ', CAST(N'2021-01-02' AS Date))
GO
INSERT [dbo].[Model] ([id], [name], [brandId]) VALUES (N'1         ', N'A4', N'1         ')
INSERT [dbo].[Model] ([id], [name], [brandId]) VALUES (N'2         ', N'A5', N'1         ')
INSERT [dbo].[Model] ([id], [name], [brandId]) VALUES (N'3         ', N'A6', N'1         ')
INSERT [dbo].[Model] ([id], [name], [brandId]) VALUES (N'4         ', N'C Class', N'2         ')
INSERT [dbo].[Model] ([id], [name], [brandId]) VALUES (N'5         ', N'E Class', N'2         ')
INSERT [dbo].[Model] ([id], [name], [brandId]) VALUES (N'6         ', N'AMG COUPE', N'2         ')
INSERT [dbo].[Model] ([id], [name], [brandId]) VALUES (N'7         ', N'MODEL X', N'3         ')
INSERT [dbo].[Model] ([id], [name], [brandId]) VALUES (N'8         ', N'MODEL S', N'3         ')
INSERT [dbo].[Model] ([id], [name], [brandId]) VALUES (N'9         ', N'Cybertruck', N'3         ')
GO
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'1         ', N'1         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'1         ', N'2         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'1         ', N'4         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'1         ', N'5         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'1         ', N'6         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'1         ', N'7         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'2         ', N'1         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'2         ', N'2         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'2         ', N'5         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'2         ', N'7         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'3         ', N'1         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'3         ', N'2         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'3         ', N'4         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'3         ', N'8         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'4         ', N'1         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'4         ', N'2         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'4         ', N'4         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'4         ', N'5         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'4         ', N'6         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'4         ', N'7         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'4         ', N'8         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'5         ', N'1         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'5         ', N'2         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'5         ', N'3         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'5         ', N'4         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'5         ', N'7         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'6         ', N'2         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'6         ', N'4         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'6         ', N'5         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'6         ', N'6         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'6         ', N'7         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'6         ', N'8         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'7         ', N'3         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'7         ', N'4         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'7         ', N'5         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'7         ', N'6         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'7         ', N'7         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'7         ', N'8         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'8         ', N'3         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'8         ', N'5         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'8         ', N'6         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'8         ', N'7         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'8         ', N'8         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'9         ', N'3         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'9         ', N'4         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'9         ', N'7         ')
INSERT [dbo].[Model_PossibleFeatures] ([modelId], [featureId]) VALUES (N'9         ', N'8         ')
GO
INSERT [dbo].[PossibleFeatures] ([id], [name]) VALUES (N'1         ', N'Diesel')
INSERT [dbo].[PossibleFeatures] ([id], [name]) VALUES (N'2         ', N'Gas')
INSERT [dbo].[PossibleFeatures] ([id], [name]) VALUES (N'3         ', N'Electric')
INSERT [dbo].[PossibleFeatures] ([id], [name]) VALUES (N'4         ', N'Cruise Control')
INSERT [dbo].[PossibleFeatures] ([id], [name]) VALUES (N'5         ', N'Adaptive Headlights')
INSERT [dbo].[PossibleFeatures] ([id], [name]) VALUES (N'6         ', N'Lane Assist')
INSERT [dbo].[PossibleFeatures] ([id], [name]) VALUES (N'7         ', N'Head-up Display')
INSERT [dbo].[PossibleFeatures] ([id], [name]) VALUES (N'8         ', N'CarPlay')
GO
INSERT [dbo].[PotentialCustomer] ([id], [name]) VALUES (N'1         ', N'Alex')
INSERT [dbo].[PotentialCustomer] ([id], [name]) VALUES (N'2         ', N'Stefan')
GO
INSERT [dbo].[PotentialCustomer_Model] ([potentialCustomerId], [modelId], [data]) VALUES (N'1         ', N'3         ', CAST(N'2021-01-10' AS Date))
INSERT [dbo].[PotentialCustomer_Model] ([potentialCustomerId], [modelId], [data]) VALUES (N'2         ', N'4         ', CAST(N'2021-03-20' AS Date))
INSERT [dbo].[PotentialCustomer_Model] ([potentialCustomerId], [modelId], [data]) VALUES (N'2         ', N'5         ', CAST(N'2021-03-10' AS Date))
GO
ALTER TABLE [dbo].[CarFeatures]  WITH CHECK ADD  CONSTRAINT [FK_CarFeatures_CarInventory] FOREIGN KEY([carId])
REFERENCES [dbo].[CarInventory] ([id])
GO
ALTER TABLE [dbo].[CarFeatures] CHECK CONSTRAINT [FK_CarFeatures_CarInventory]
GO
ALTER TABLE [dbo].[CarFeatures]  WITH CHECK ADD  CONSTRAINT [FK_CarFeatures_PossibleFeatures] FOREIGN KEY([featureId])
REFERENCES [dbo].[PossibleFeatures] ([id])
GO
ALTER TABLE [dbo].[CarFeatures] CHECK CONSTRAINT [FK_CarFeatures_PossibleFeatures]
GO
ALTER TABLE [dbo].[CarInventory]  WITH CHECK ADD  CONSTRAINT [FK_CarInventory_Model] FOREIGN KEY([modelId])
REFERENCES [dbo].[Model] ([id])
GO
ALTER TABLE [dbo].[CarInventory] CHECK CONSTRAINT [FK_CarInventory_Model]
GO
ALTER TABLE [dbo].[CustomerPurchase]  WITH CHECK ADD  CONSTRAINT [FK_CustomerPurchase_CarInventory] FOREIGN KEY([carId])
REFERENCES [dbo].[CarInventory] ([id])
GO
ALTER TABLE [dbo].[CustomerPurchase] CHECK CONSTRAINT [FK_CustomerPurchase_CarInventory]
GO
ALTER TABLE [dbo].[CustomerPurchase]  WITH CHECK ADD  CONSTRAINT [FK_CustomerPurchase_Customer] FOREIGN KEY([customerId])
REFERENCES [dbo].[Customer] ([id])
GO
ALTER TABLE [dbo].[CustomerPurchase] CHECK CONSTRAINT [FK_CustomerPurchase_Customer]
GO
ALTER TABLE [dbo].[Model]  WITH CHECK ADD  CONSTRAINT [FK_Model_Brand] FOREIGN KEY([brandId])
REFERENCES [dbo].[Brand] ([id])
GO
ALTER TABLE [dbo].[Model] CHECK CONSTRAINT [FK_Model_Brand]
GO
ALTER TABLE [dbo].[Model_PossibleFeatures]  WITH CHECK ADD  CONSTRAINT [FK_Model_PossibleFeatures_Model] FOREIGN KEY([modelId])
REFERENCES [dbo].[Model] ([id])
GO
ALTER TABLE [dbo].[Model_PossibleFeatures] CHECK CONSTRAINT [FK_Model_PossibleFeatures_Model]
GO
ALTER TABLE [dbo].[Model_PossibleFeatures]  WITH CHECK ADD  CONSTRAINT [FK_Model_PossibleFeatures_PossibleFeatures] FOREIGN KEY([featureId])
REFERENCES [dbo].[PossibleFeatures] ([id])
GO
ALTER TABLE [dbo].[Model_PossibleFeatures] CHECK CONSTRAINT [FK_Model_PossibleFeatures_PossibleFeatures]
GO
ALTER TABLE [dbo].[PotentialCustomer_Model]  WITH CHECK ADD  CONSTRAINT [FK_PotentialCustomer_Model_Model] FOREIGN KEY([modelId])
REFERENCES [dbo].[Model] ([id])
GO
ALTER TABLE [dbo].[PotentialCustomer_Model] CHECK CONSTRAINT [FK_PotentialCustomer_Model_Model]
GO
ALTER TABLE [dbo].[PotentialCustomer_Model]  WITH CHECK ADD  CONSTRAINT [FK_PotentialCustomer_Model_PotentialCustomer] FOREIGN KEY([potentialCustomerId])
REFERENCES [dbo].[PotentialCustomer] ([id])
GO
ALTER TABLE [dbo].[PotentialCustomer_Model] CHECK CONSTRAINT [FK_PotentialCustomer_Model_PotentialCustomer]
GO
USE [master]
GO
ALTER DATABASE [CarDealer] SET  READ_WRITE 
GO
