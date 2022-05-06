const express = require("express")

const app = express();


const data1 = [
  "import numpy as np\r",
  "# Enter the value of n\r",
  "n=int(input('Enter no. of values:'))\r",
  "# Generates n random numbers from Normal Distribution\r",
  "rand_num = np.random.normal(0,1,n)\r",
  'print(n, " random numbers from a standard normal distribution:")\r',
  "print(rand_num)\r",
  "arr=np.array([rand_num])\r",
  "# Displays the size of the Array\r",
  "print(arr.shape)\r",
  "output\r",
  "Enter no. of values:10\r",
  "10  random numbers from a standard normal distribution:\r",
  "[-0.34953998  1.60514591 -0.60005696  0.26263808  0.87930153  0.98339437\r",
  "  0.40472381 -0.73362668 -0.20067116 -0.97191095]\r",
  "(1, 10)\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "b. Implement Arithmetic operations on two arrays (perform broadcasting also.)\r",
  "\r",
  "#Generates an Array A with 0 to 11 in a 3X4 form\r",
  "A = np.arange(12).reshape(3,4)\r",
  "print(A)\r",
  "#Generates an Array B with 0 to 3 in a 1X3 form\r",
  "B  = np.arange(4)\r",
  "print(B)\r",
  "#Performs the addition between A and B\r",
  "c=A+B\r",
  "print(c)\r",
  "#Similarly perform remaining arithmetic operations (Subtraction,multiplication, division )\r",
  "output\r",
  "[[ 0  1  2  3]\r",
  " [ 4  5  6  7]\r",
  " [ 8  9 10 11]]\r",
  "[0 1 2 3]\r",
  "[[ 0  2  4  6]\r",
  " [ 4  6  8 10]\r",
  " [ 8 10 12 14]]\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "c. Find minimum, maximum, mean in a given array. ( in both the axes )\r",
  "\r",
  "arr = np.array([[11, 2, 3],[4, 5, 16],[7, 81, 22]])\r",
  "# finding the maximum and minimum element in the array\r",
  "max_element = np.max(arr)\r",
  "min_element = np.min(arr)\r",
  "  \r",
  "# printing the result\r",
  "print('maximum element in the array is:', max_element)\r",
  "print('minimumm element in the array is:', min_element)\r",
  "# finding the maximum and \r",
  "# minimum element in the array\r",
  "max_element_column = np.max(arr, 0)\r",
  "max_element_row = np.max(arr, 1)\r",
  "  \r",
  "min_element_column = np.amin(arr, 0)\r",
  "min_element_row = np.amin(arr, 1)\r",
  "  \r",
  "# printing the result\r",
  "print('maximum elements in the columns of the array is:',max_element_column)\r",
  "  \r",
  "print('maximum elements in the rows of the array is:', max_element_row)\r",
  "  \r",
  "print('minimum elements in the columns of the array is:',min_element_column)\r",
  "  \r",
  "print('minimum elements in the rows of the array is:',min_element_row)\r",
  "\r",
  "# mean of the flattened array \r",
  'print("\\nmean of arr, axis = None : ", np.mean(arr)) \r',
  "    \r",
  "# mean along the axis = 0 (row-wise) \r",
  'print("\\nmean of arr, axis = 0 : ", np.mean(arr, axis = 0)) \r',
  "   \r",
  "# mean along the axis = 1 (Column-wise) \r",
  'print("\\nmean of arr, axis = 1 : ", np.mean(arr, axis = 1))\r',
  "\r",
  "output\r",
  "\r",
  "maximum element in the array is: 81\r",
  "minimumm element in the array is: 2\r",
  "maximum elements in the columns of the array is: [11 81 22]\r",
  "maximum elements in the rows of the array is: [11 16 81]\r",
  "minimum elements in the columns of the array is: [4 2 3]\r",
  "minimum elements in the rows of the array is: [2 4 7]\r",
  "\r",
  "mean of arr, axis = None :  16.77777777777778\r",
  "\r",
  "mean of arr, axis = 0 :  [ 7.33333333 29.33333333 13.66666667]\r",
  "\r",
  "mean of arr, axis = 1 :  [ 5.33333333  8.33333333 36.66666667]\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "d. Implement np.arange and np.linspace functions.\r",
  "\r",
  "\r",
  "# Prints all numbers from 0 to 9 in steps of 1\r",
  "arr=np.linspace(start = 0, stop = 10, num = 11,dtype = int)\r",
  "print(arr)\r",
  "arr=np.linspace(start = 0, stop = 1, num = 11)\r",
  "print(arr)\r",
  "# Prints all numbers from 1 to 2 in steps of 0.1\r",
  "print(np.arange(1, 2, 0.1))\r",
  "\r",
  "output\r",
  "\r",
  "[ 0  1  2  3  4  5  6  7  8  9 10]\r",
  "[0.  0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1. ]\r",
  "[1.  1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8 1.9]\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "e. Create a pandas series from a given list.\r",
  "\r",
  "# import pandas lib. as pd\r",
  "import pandas as pd\r",
  "# Assume l1 is a list of the following words\r",
  "l1 = ['ZERO', 'ONE', 'TWO', 'THREE',\r",
  "\t\t\t'FOUR', 'FIVE', 'SIX','SEVEN','EIGHT','NINE','TEN']\r",
  "\t\t\t\r",
  "# create Pandas Series with define indexes\r",
  "x = pd.Series(l1)\r",
  "\r",
  "# print the Series\r",
  "print(x)\r",
  "\r",
  "output\r",
  "\r",
  "0      ZERO\r",
  "1       ONE\r",
  "2       TWO\r",
  "3     THREE\r",
  "4      FOUR\r",
  "5      FIVE\r",
  "6       SIX\r",
  "7     SEVEN\r",
  "8     EIGHT\r",
  "9      NINE\r",
  "10      TEN\r",
  "dtype: object\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "f. Create pandas series with data and index and display the index values.\r",
  "\r",
  "# import pandas lib. as pd\r",
  "import pandas as pd\r",
  "\r",
  "# create Pandas Series with define indexes\r",
  "x = pd.Series([10, 20, 30, 40, 50], index =['a', 'b', 'c', 'd', 'e'])\r",
  "\r",
  "# print the Series\r",
  "print(x)\r",
  "\r",
  "output\r",
  "\r",
  "a    10\r",
  "b    20\r",
  "c    30\r",
  "d    40\r",
  "e    50\r",
  "dtype: int64\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "\r",
  "g. Create a data frame with columns at least 5 observations\r",
  "i. select a particular column from the DataFrame\r",
  "ii. Summarize the data frame and observe the stats of the DataFrame created\r",
  "iii. Observe the mean and standard deviation of the data frame and print the values.\r",
  "\r",
  "import pandas as pd\r",
  "import numpy as np\r",
  "\r",
  "exam_data  = {'name': ['Anastasia', 'Dima', 'Katherine', 'James', 'Emily'],'score': [12.5, 9, 16.5, np.nan, 9],'attempts': [1, 3, 2, 3, 2],\r",
  "        'qualify': ['yes', 'no', 'yes', 'no', 'no']}\r",
  "labels = ['a', 'b', 'c', 'd', 'e']\r",
  "\r",
  "df = pd.DataFrame(exam_data , index=labels)\r",
  'print("Dataset is as follows")\r',
  "print(df)\r",
  'print("Summary of the Dataset")\r',
  "print(df.info())\r",
  'print("Statistical values of numerical attributes")\r',
  "print(df.describe())\r",
  "meanvalue=df.score.mean()\r",
  "stdvalue=df.score.std()\r",
  "print('mean value of Score is',meanvalue)\r",
  "print('Standard deviation of score is',stdvalue)\r",
  "\r",
  "output\r",
  "Dataset is as follows\r",
  "        name  score  attempts qualify\r",
  "a  Anastasia   12.5         1     yes\r",
  "b       Dima    9.0         3      no\r",
  "c  Katherine   16.5         2     yes\r",
  "d      James    NaN         3      no\r",
  "e      Emily    9.0         2      no\r",
  "Summary of the Dataset\r",
  "<class 'pandas.core.frame.DataFrame'>\r",
  "Index: 5 entries, a to e\r",
  "Data columns (total 4 columns):\r",
  " #   Column    Non-Null Count  Dtype  \r",
  "---  ------    --------------  -----  \r",
  " 0   name      5 non-null      object \r",
  " 1   score     4 non-null      float64\r",
  " 2   attempts  5 non-null      int64  \r",
  " 3   qualify   5 non-null      object \r",
  "dtypes: float64(1), int64(1), object(2)\r",
  "memory usage: 200.0+ bytes\r",
  "None\r",
  "Statistical values of numerical attributes\r",
  "           score  attempts\r",
  "count   4.000000   5.00000\r",
  "mean   11.750000   2.20000\r",
  "std     3.570714   0.83666\r",
  "min     9.000000   1.00000\r",
  "25%     9.000000   2.00000\r",
  "50%    10.750000   2.00000\r",
  "75%    13.500000   3.00000\r",
  "max    16.500000   3.00000\r",
  "mean value of Score is 11.75\r",
  "Standard deviation of score is 3.570714214271425\r",
];


const data2 = [
  "a. Determine the data type of each column.\r",
  "\r",
  "# importing all the necessary libraries\r",
  "import pandas as pd\r",
  "import numpy as np\r",
  "\r",
  "#we need to read the data\r",
  'data = pd.read_csv("https://raw.githubusercontent.com/naveenjoshii/Intro-to-MachineLearning/master/Titanic/titanic.csv")\r',
  "#print top 5 rows \r",
  "print(data.head())\r",
  "\r",
  "output\r",
  "\r",
  "PassengerId  Survived  Pclass  ...     Fare Cabin  Embarked\r",
  "0            1         0       3  ...   7.2500   NaN         S\r",
  "1            2         1       1  ...  71.2833   C85         C\r",
  "2            3         1       3  ...   7.9250   NaN         S\r",
  "3            4         1       1  ...  53.1000  C123         S\r",
  "4            5         0       3  ...   8.0500   NaN         S\r",
  "\r",
  "[5 rows x 12 columns]\r",
  "\r",
  "# to get the datatype of all columns we can use Dataframe.dtypes\r",
  "print(data.dtypes)\r",
  "\r",
  "output\r",
  "PassengerId      int64\r",
  "Survived         int64\r",
  "Pclass           int64\r",
  "Name            object\r",
  "Sex             object\r",
  "Age            float64\r",
  "SibSp            int64\r",
  "Parch            int64\r",
  "Ticket          object\r",
  "Fare           float64\r",
  "Cabin           object\r",
  "Embarked        object\r",
  "dtype: object\r",
  "\r",
  "\r",
  "b. Find the number of non-null values in each column.\r",
  "\r",
  "# Dataframe.info() gives all information about every column in our dataset\r",
  "data.info()\r",
  "\r",
  "output\r",
  "\r",
  "<class 'pandas.core.frame.DataFrame'>\r",
  "RangeIndex: 891 entries, 0 to 890\r",
  "Data columns (total 12 columns):\r",
  " #   Column       Non-Null Count  Dtype  \r",
  "---  ------       --------------  -----  \r",
  " 0   PassengerId  891 non-null    int64  \r",
  " 1   Survived     891 non-null    int64  \r",
  " 2   Pclass       891 non-null    int64  \r",
  " 3   Name         891 non-null    object \r",
  " 4   Sex          891 non-null    object \r",
  " 5   Age          714 non-null    float64\r",
  " 6   SibSp        891 non-null    int64  \r",
  " 7   Parch        891 non-null    int64  \r",
  " 8   Ticket       891 non-null    object \r",
  " 9   Fare         891 non-null    float64\r",
  " 10  Cabin        204 non-null    object \r",
  " 11  Embarked     889 non-null    object \r",
  "dtypes: float64(2), int64(5), object(5)\r",
  "memory usage: 83.7+ KB\r",
  "\r",
  "c. Find out the unique values in each categorical column and frequency of each unique value.\r",
  "\r",
  "# categorical is nothing but the datatype which is other than numerical datatype (i.e int,float etc).\r",
  "# to get the all categorical columns, we can use Dataframe.select_dtypes and we have to specify which \r",
  "#datatype we required. \r",
  '# In our case it would be "object" datatype\r',
  "categorical_cols  = data.select_dtypes(include=['object']).columns.tolist()\r",
  'print("Categorical columns are : ",categorical_cols)\r',
  'print("printing the results")\r',
  "for i in categorical_cols:\r",
  '  print("==========  Column \'"+i+"\' =============")\r',
  "  print(data[i].value_counts())\r",
  "\r",
  "\r",
  "output\r",
  "\r",
  "Categorical columns are :  ['Name', 'Sex', 'Ticket', 'Cabin', 'Embarked']\r",
  "printing the results\r",
  "==========  Column 'Name' =============\r",
  "Robert, Mrs. Edward Scott (Elisabeth Walton McMillan)    1\r",
  "Smith, Mr. Thomas                                        1\r",
  "Cameron, Miss. Clear Annie                               1\r",
  'Parkes, Mr. Francis "Frank"                              1\r',
  "Panula, Mrs. Juha (Maria Emilia Ojala)                   1\r",
  "                                                        ..\r",
  "Walker, Mr. William Anderson                             1\r",
  "Hassab, Mr. Hammad                                       1\r",
  "Olsen, Mr. Karl Siegwart Andreas                         1\r",
  "Reed, Mr. James George                                   1\r",
  "Wiseman, Mr. Phillippe                                   1\r",
  "Name: Name, Length: 891, dtype: int64\r",
  "==========  Column 'Sex' =============\r",
  "male      577\r",
  "female    314\r",
  "Name: Sex, dtype: int64\r",
  "==========  Column 'Ticket' =============\r",
  "1601               7\r",
  "CA. 2343           7\r",
  "347082             7\r",
  "3101295            6\r",
  "CA 2144            6\r",
  "                  ..\r",
  "350034             1\r",
  "19947              1\r",
  "A/5 21174          1\r",
  "PC 17474           1\r",
  "SOTON/OQ 392082    1\r",
  "Name: Ticket, Length: 681, dtype: int64\r",
  "==========  Column 'Cabin' =============\r",
  "G6             4\r",
  "B96 B98        4\r",
  "C23 C25 C27    4\r",
  "F2             3\r",
  "E101           3\r",
  "              ..\r",
  "B38            1\r",
  "B102           1\r",
  "E58            1\r",
  "C101           1\r",
  "B4             1\r",
  "Name: Cabin, Length: 147, dtype: int64\r",
  "==========  Column 'Embarked' =============\r",
  "S    644\r",
  "C    168\r",
  "Q     77\r",
  "Name: Embarked, dtype: int64\r",
  "\r",
  "d. Find the number of rows where age is greater than the mean age of data.\r",
  "\r",
  "# to get mean of age column\r",
  "age_mean = data['Age'].mean()\r",
  'print("Mean of Age is : ",age_mean)\r',
  'print("printing the result")\r',
  "print(np.sum(data['Age']>age_mean))\r",
  "\r",
  "output\r",
  "\r",
  "Mean of Age is :  29.69911764705882\r",
  "printing the result\r",
  "330\r",
  "\r",
  "e. Delete all the rows with missing values.\r",
  "\r",
  'print("length of dataframe before deleting rows with missing values",len(data))\r',
  "# deletes the rows where at least one element is missing\r",
  "data.dropna(inplace=True)\r",
  'print("length of dataframe after the deletion of missing value rows",len(data))\r',
  "\r",
  "output\r",
  "\r",
  "length of dataframe before deleting rows with missing values 891\r",
];


const data3 = [
  "#importing all the necessary libraries\r",
  "import pandas as pd\r",
  "import numpy as np\r",
  "import seaborn as sns\r",
  "import matplotlib.pyplot as plt\r",
  "\r",
  "#reading data\r",
  'data = pd.read_csv("https://raw.githubusercontent.com/naveenjoshii/Intro-to-MachineLearning/master/Titanic/titanic.csv")\r',
  "print(data.head()\r",
  "\r",
  "output\r",
  "\r",
  "   PassengerId  Survived  Pclass  ...     Fare Cabin  Embarked\r",
  "0            1         0       3  ...   7.2500   NaN         S\r",
  "1            2         1       1  ...  71.2833   C85         C\r",
  "2            3         1       3  ...   7.9250   NaN         S\r",
  "3            4         1       1  ...  53.1000  C123         S\r",
  "4            5         0       3  ...   8.0500   NaN         S\r",
  "\r",
  "[5 rows x 12 columns]\r",
  "\r",
  "a. Information regarding each column of the data\r",
  "\r",
  "#printing the info about all the columns\r",
  "print(data.info())\r",
  "\r",
  "\r",
  "output\r",
  "\r",
  "<class 'pandas.core.frame.DataFrame'>\r",
  "RangeIndex: 891 entries, 0 to 890\r",
  "Data columns (total 12 columns):\r",
  " #   Column       Non-Null Count  Dtype  \r",
  "---  ------       --------------  -----  \r",
  " 0   PassengerId  891 non-null    int64  \r",
  " 1   Survived     891 non-null    int64  \r",
  " 2   Pclass       891 non-null    int64  \r",
  " 3   Name         891 non-null    object \r",
  " 4   Sex          891 non-null    object \r",
  " 5   Age          714 non-null    float64\r",
  " 6   SibSp        891 non-null    int64  \r",
  " 7   Parch        891 non-null    int64  \r",
  " 8   Ticket       891 non-null    object \r",
  " 9   Fare         891 non-null    float64\r",
  " 10  Cabin        204 non-null    object \r",
  " 11  Embarked     889 non-null    object \r",
  "dtypes: float64(2), int64(5), object(5)\r",
  "memory usage: 83.7+ KB\r",
  "None\r",
  "\r",
  "b. Impact of each column on the label\r",
  "\r",
  "# plotting the correlation using heatmap\r",
  "sns.heatmap(data.corr(),cmap='coolwarm',xticklabels=True,annot=True)\r",
  "plt.title('data.corr()')\r",
  "\r",
  "output\r",
  "\r",
  "Text(0.5, 1.0, 'data.corr()')\r",
  "\r",
  "\r",
  "\r",
  "c. Number of survivals in each gender\r",
  "\r",
  "# plotting countplot for Each gender who has survived and not survived\r",
  "sns.set_style('whitegrid')\r",
  "sns.countplot(x='Survived',hue='Sex',data=data,palette='colorblind')\r",
  "\r",
  "output\r",
  "\r",
  "<matplotlib.axes._subplots.AxesSubplot at 0x7f621a047810>\r",
  "\r",
  "\r",
  "\r",
  "d. Number of survivals in each passenger class\r",
  "\r",
  "#plotting count plot for no of survivals in each class\r",
  "sns.set_style('whitegrid')\r",
  "sns.countplot(x='Survived',hue='Pclass',data=data,palette='bright')\r",
  "\r",
  "output\r",
  "\r",
  "<matplotlib.axes._subplots.AxesSubplot at 0x7f621a034510>\r",
  "\r",
  "\r",
  "e. The number of people who are not alone.\r",
  "\r",
  "# count plot for who has siblings/spouse\r",
  "sns.countplot(x = 'SibSp', data = data,)\r",
  "\r",
  "\r",
  "\r",
  "output\r",
  "<matplotlib.axes._subplots.AxesSubplot at 0x7f6219b36390>\r",
];

const data4 = [
  "# importing all the necessary libraries\r",
  "import pandas as pd\r",
  "import numpy as np\r",
  "\r",
  "#we need to read the data\r",
  'data = pd.read_csv("https://raw.githubusercontent.com/ageron/handson-ml/master/datasets/housing/housing.csv")\r',
  "#print top 5 rows \r",
  "print(data.head())\r",
  "\r",
  "output\r",
  "\r",
  "longitude  latitude  ...  median_house_value  ocean_proximity\r",
  "0    -122.23     37.88  ...            452600.0         NEAR BAY\r",
  "1    -122.22     37.86  ...            358500.0         NEAR BAY\r",
  "2    -122.24     37.85  ...            352100.0         NEAR BAY\r",
  "3    -122.25     37.85  ...            341300.0         NEAR BAY\r",
  "4    -122.25     37.85  ...            342200.0         NEAR BAY\r",
  "\r",
  "[5 rows x 10 columns]\r",
  "\r",
  "a. Data Type of each column and info regarding each column\r",
  "\r",
  "# data information for each column\r",
  "print(data.info())\r",
  "\r",
  "Output\r",
  "\r",
  "<class 'pandas.core.frame.DataFrame'>\r",
  "RangeIndex: 20640 entries, 0 to 20639\r",
  "Data columns (total 10 columns):\r",
  " #   Column              Non-Null Count  Dtype  \r",
  "---  ------              --------------  -----  \r",
  " 0   longitude           20640 non-null  float64\r",
  " 1   latitude            20640 non-null  float64\r",
  " 2   housing_median_age  20640 non-null  float64\r",
  " 3   total_rooms         20640 non-null  float64\r",
  " 4   total_bedrooms      20433 non-null  float64\r",
  " 5   population          20640 non-null  float64\r",
  " 6   households          20640 non-null  float64\r",
  " 7   median_income       20640 non-null  float64\r",
  " 8   median_house_value  20640 non-null  float64\r",
  " 9   ocean_proximity     20640 non-null  object \r",
  "dtypes: float64(9), object(1)\r",
  "memory usage: 1.6+ MB\r",
  "None\r",
  "\r",
  "\r",
  "b. The average age of a house in the data set.\r",
  "\r",
  "# printing average age of house\r",
  "print(data['housing_median_age'].mean())\r",
  "\r",
  "Output\r",
  "\r",
  "28.639486434108527\r",
  "\r",
  "c. Determines top 10 localities with the high difference between income and house value. Also, top 10 localities that have the lowest difference\r",
  "\r",
  "#calculating the difference btw House value and income and adding new column 'diff_income_and_house_value' with difference values\r",
  "data['diff_income_and_house_value'] = data['median_house_value'] - data['median_income']\r",
  "# sorting the whole dataframe by the difference value in descending order\r",
  "data.sort_values(by='diff_income_and_house_value', ascending=False,inplace=True)\r",
  "#printing the top 10 localities with highest difference\r",
  'print("the top 10 localities with highest difference")\r',
  "print(data['ocean_proximity'].head(10))\r",
  "#printing the top 10 localities with lowest difference\r",
  'print("the top 10 localities with lowest difference")\r',
  "print(data['ocean_proximity'].tail(10))\r",
  "\r",
  "Output\r",
  "\r",
  "the top 10 localities with highest difference\r",
  "4861      <1H OCEAN\r",
  "6688         INLAND\r",
  "16642    NEAR OCEAN\r",
  "15661      NEAR BAY\r",
  "15652      NEAR BAY\r",
  "6639      <1H OCEAN\r",
  "459        NEAR BAY\r",
  "89         NEAR BAY\r",
  "10448     <1H OCEAN\r",
  "17819     <1H OCEAN\r",
  "Name: ocean_proximity, dtype: object\r",
  "the top 10 localities with lowest difference\r",
  "2779         INLAND\r",
  "16186        INLAND\r",
  "14326    NEAR OCEAN\r",
  "1825       NEAR BAY\r",
  "13889        INLAND\r",
  "5887      <1H OCEAN\r",
  "19802        INLAND\r",
  "2521         INLAND\r",
  "2799         INLAND\r",
  "9188         INLAND\r",
  "Name: ocean_proximity, dtype: object\r",
  "\r",
  "d. What is the ratio of bedrooms to total rooms in the data\r",
  "\r",
  "# total no of rooms\r",
  "total_rooms = data['total_rooms'].sum()\r",
  "# total number of bedrooms\r",
  "total_bedrooms = data['total_bedrooms'].sum()\r",
  "#printing the ratio of bedrooms to total rooms\r",
  "print(total_rooms//total_bedrooms)\r",
  "\r",
  "Output\r",
  "\r",
  "4.0\r",
  "\r",
  "e. Determine the average price of a house for each type of ocean_proximity.\r",
  "\r",
  "# average house price for each ocean_proximity type\r",
  "data.groupby('ocean_proximity')['median_house_value'].median()\r",
  "\r",
  "Output\r",
  "\r",
  "ocean_proximity\r",
  "<1H OCEAN     214850.0\r",
  "INLAND        108500.0\r",
  "ISLAND        414700.0\r",
  "NEAR BAY      233800.0\r",
  "NEAR OCEAN    229450.0\r",
  "Name: median_house_value, dtype: float64",
];

const data5 = [
  "a. Determine the outliers in each non-categorical column of Titanic Data and remove them.\r",
  "\r",
  "# importing all the necessary libraries\r",
  "import pandas as pd\r",
  "import numpy as np\r",
  "\r",
  "#we need to read the data\r",
  'data = pd.read_csv("https://raw.githubusercontent.com/naveenjoshii/Intro-to-MachineLearning/master/Titanic/titanic.csv")\r',
  "#print top 5 rows \r",
  "print(data.head())\r",
  "\r",
  "Output\r",
  "   PassengerId  Survived  Pclass  ...     Fare Cabin  Embarked\r",
  "0            1         0       3  ...   7.2500   NaN         S\r",
  "1            2         1       1  ...  71.2833   C85         C\r",
  "2            3         1       3  ...   7.9250   NaN         S\r",
  "3            4         1       1  ...  53.1000  C123         S\r",
  "4            5         0       3  ...   8.0500   NaN         S\r",
  "\r",
  "[5 rows x 12 columns]\r",
  "\r",
  "\r",
  "# function to calculate the lower and upperbound\r",
  "def detect_outliers(data,threshold):\r",
  "  mean = np.mean(data)\r",
  "  std =np.std(data)\r",
  "  lb = max(mean - (threshold * std),min(data))\r",
  "  ub = min(mean + (threshold * std),max(data))\r",
  "  return lb,ub\r",
  "\r",
  "\r",
  "df = data.copy()\r",
  'lb,ub = detect_outliers(data["Fare"],4)\r',
  "# removing the rows which are greater than upperbound\r",
  "df.drop(df[df.Fare > ub].index, inplace=True)\r",
  "# removing the rows which are less than lowerbound\r",
  "df.drop(df[df.Fare < lb ].index, inplace=True)\r",
  "\r",
  "\r",
  'lb,ub = detect_outliers(data["Age"],5)\r',
  "# removing the rows which are greater than upperbound\r",
  "df.drop(df[df.Age > ub].index, inplace=True)\r",
  "# removing the rows which are less than lowerbound\r",
  "df.drop(df[df.Age < lb].index, inplace=True)\r",
  "\r",
  "b. Determine missing values in each column of Titanic data. If missing values account for 30% of data, then remove the column.\r",
  "\r",
  "#printing the missing value percentage for every column\r",
  "df.isnull().mean() * 100\r",
  "\r",
  "Output\r",
  "\r",
  "PassengerId     0.000000\r",
  "Survived        0.000000\r",
  "Pclass          0.000000\r",
  "Name            0.000000\r",
  "Sex             0.000000\r",
  "Age            20.113636\r",
  "SibSp           0.000000\r",
  "Parch           0.000000\r",
  "Ticket          0.000000\r",
  "Fare            0.000000\r",
  "Cabin          77.954545\r",
  "Embarked        0.227273\r",
  "dtype: float64\r",
  "\r",
  "# get all the column names in our dataset\r",
  "df.columns\r",
  "\r",
  "Output\r",
  "\r",
  "Index(['PassengerId', 'Survived', 'Pclass', 'Name', 'Sex', 'Age', 'SibSp',\r",
  "       'Parch', 'Ticket', 'Fare', 'Cabin', 'Embarked'],\r",
  "      dtype='object')\r",
  "\r",
  "# As we can see cabin column has more than 30% of missing values, so we have to drop that column\r",
  "df.drop(['Cabin'],inplace=True,axis=1)\r",
  "\r",
  "# after removing the column cabin, printing the columns again. If you observe there is no Cabin in the output\r",
  "df.columns\r",
  "\r",
  "\r",
  "Output\r",
  "\r",
  "Index(['PassengerId', 'Survived', 'Pclass', 'Name', 'Sex', 'Age', 'SibSp',\r",
  "       'Parch', 'Ticket', 'Fare', 'Embarked'],\r",
  "      dtype='object')\r",
  "\r",
  "\r",
  "c. If missing values are less than 30% of entire data then create a new data frame\r",
  "i. Missing values in numeric columns are filled with the mean of the corresponding column.\r",
  "\r",
  "\r",
  "#printing the percentage of missing values in Age before handling\r",
  "df['Age'].isnull().mean() * 100\r",
  "\r",
  "Output\r",
  "\r",
  "20.113636363636363\r",
  "\r",
  "# Filling the missing values with the mean of respective column\r",
  "df['Age']=df['Age'].fillna(df['Age'].mean())\r",
  "\r",
  "#printing the percentage of missing values in Age after handling\r",
  "df['Age'].isnull().mean() * 100\r",
  "\r",
  "Output\r",
  "\r",
  "0.0\r",
  "\r",
  "ii. Missing values in categorical columns are filled with the most frequently occurring value.\r",
  "\r",
  "#printing the percentage of missing values in Embarked before handling\r",
  "df['Embarked'].isnull().mean() * 100\r",
  "\r",
  "Output\r",
  "\r",
  "0.22727272727272727\r",
  "\r",
  "# filling with filled with the most frequently occurring value.\r",
  "df[\"Embarked\"].fillna(df['Embarked'].mode()[0],inplace=True)\r",
  "\r",
  "#printing the percentage of missing values in Embarked after handling\r",
  "df['Embarked'].isnull().mean() * 100\r",
  "\r",
  "\r",
  "Output\r",
  "\r",
  "0.0",
];







// put the data in the array using the following code in python






const PORT = process.env.PORT || 5000;
app.get("/1", (req, res) => {
	res.send(data1)
})


app.get("/2", (req, res) => {
  res.send(data2);
});

app.get("/3", (req, res) => {
  res.send(data3);
});


app.get("/4", (req, res) => {
  res.send(data4);
});

app.get("/5", (req, res) => {
  res.send(data5);
});


app.listen(PORT, () => {
	console.log("started server")
})






