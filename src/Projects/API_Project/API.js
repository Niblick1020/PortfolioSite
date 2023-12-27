// src/Project/API_Project/API.js

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import React from "react";
import "./style.css";
import { HelmetProvider } from "react-helmet-async";

export const APIproject = () => {
  return (
    <section className="Page-space">
      <div>
        <h1>API Project Page</h1>
        <p>
          The purpose of this script it to establish a connection Between my
          Customer relationship management(CRM) system and extract relevant data
          to my SQL microsoft server. The goal is to create insightful
          visualizations in Power BI."
        </p>
        <h3 className="top_padding"> API Key Generator </h3>
        <p>
          This script creates a distinctive API key by utilizing the current
          day, month, and year values along with a provided key, employing SHA-1
          encryption.
        </p>
        <p>The following libraries are currently utilized in this section.</p>
        <SyntaxHighlighter
          className="code-box"
          language="python"
          style={vscDarkPlus}
        >
          {`	import hashlib
	from datetime import datetime
	from pytz import timezone`}
        </SyntaxHighlighter>

        <p>
          Datetime and timezone are used for the current day, month and year
          values. below is a demonstrate on how we retrieved a date from a
          specific time zone.
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# getting the current time in UTC timezone
	now_utc = datetime.now(timezone('UTC'))

	# Format the above DateTime using the strftime()
	print('Current Time in UTC TimeZone:',now_utc.strftime(format))`}
        </SyntaxHighlighter>
        <p>hashlib is used for the SHA-1 encription.</p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# encode current day, month and year. 
	todaysfactor = str(day * month * year).encode('utf-8')
	# encode the key
	key = givenKey.encode('utf-8')

	# create the hashlib object with the sha1 encription
	hash_object = hashlib.new('sha1')
	hash_object.update(key)
	hash_object.update(todaysfactor)

	#print todays Key
	print(hash_object.hexdigest())`}
        </SyntaxHighlighter>
        <h3 className="top_padding">API Data Retrieval</h3>
        <p>
          This section of code demonstrates the integration of an API for
          retrieving relevant data. The process involves making a secure HTTPS
          connection, constructing a payload, and handling the received data for
          further processing.
        </p>
        <p>The following libraries are currently utilized in this section.</p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# Dependencies
	import http.client
	import json`}
        </SyntaxHighlighter>
        <p>
          This section sets the API_ENDPOINT variable, representing the base URL
          for the API. Adjust this URL according to your specific API.
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# Configuration
	API_ENDPOINT = "https://example.com"`}
        </SyntaxHighlighter>
        <p>
          Here, a sample payload is created in the form of a list of
          dictionaries. This payload is then converted to a JSON-formatted
          string and encoded into bytes.
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# payload
	payload = [
    {
        "ColumnName": "ExampleColumn",
        "Operator": "=",
        "ColumnValue": "Value in ExampleColumn",
    }]
    # Convert payload to JSON-formatted string
	payload_str = json.dumps(payload)
	
	# Encode the string to bytes
	payload_bytes = payload_str.encode('utf-8')
]`}
        </SyntaxHighlighter>
        <p>
          Headers are configured for the HTTP request. This includes specifying
          the content type and accepted response format.
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	headers = {"Content-type": "application/x-www-form-urlencoded",
			   "Accept": "text/plain"}`}
        </SyntaxHighlighter>
        <p>
          In this section, an HTTPS connection is established to the API
          endpoint. A POST request is then made to a specific URL using the
          prepared payload and headers.
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# Establishing the HTTP connection
	conn = http.client.HTTPSConnection(API_ENDPOINT)

	# Making the POST request
	conn.request("POST", "link URL", payload_bytes, headers)`}
        </SyntaxHighlighter>
        <p>
          After receiving the data from the API, it is transformed into a
          structured dictionary (transformed_data) using predefined column names
          from COLUMN_NAME.
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# Transforming the data into a structured dictionary
	dictData = {}
	for record in data_list:
		for key, value in record.items():
		
			trueKey = COLUMN_NAME[key]
			
			if trueKey not in dictData:
				dictData[trueKey] = []
				
			dictData[trueKey].append(value)`}
        </SyntaxHighlighter>
        <h3 className="top_padding">Data Compilation and Transformation</h3>

        <p>The following libraries are currently utilized in this section.</p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# datetime for working with dates
	# pandas for creating and manipulating DataFrames
	from datetime import datetime, timedelta
	import pandas as pd`}
        </SyntaxHighlighter>

        <p>
          First we start by creating a Pandas DataFrame with the dictionary we
          created in the previous step.
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# Creating a DataFrame from the merged dictionary
	dataFrame = pd.DataFrame.from_dict(dictData)`}
        </SyntaxHighlighter>
        <p>
          In this next section we categorize data within a Pandas DataFrame
          based on specific date ranges. The function adds four new columns,
          namely "Previous 4 Week," "Current 4 Week," "Previous YTD"
          (Year-to-Date), and "Current YTD," and populates them according to
          predefined date intervals. It utilizes datetime and timedelta from the
          datetime module to calculate these intervals. The logic within the
          function checks each row's Date against the specified date ranges,
          assigning unique client values to the appropriate new columns. This
          categorization is crucial for organizing and analyzing data based on
          temporal criteria, facilitating subsequent analysis and reporting.
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`

    # Add columns to store the results
    dataFrame['Previous 4 Week'] = ""
    dataFrame['Current 4 Week'] = ""
    dataFrame['Previous YTD'] = ""
    dataFrame['Current YTD'] = ""

	# Get todays date
	startDate = datetime.today()

    # Calculate dates for 4 weeks and 8 weeks ago
    fourWeeksAgo = startDate - timedelta(days=28)
    eightWeeksAgo = startDate - timedelta(days=56)

    # Calculate the beginning of the current year
    currentYearStart = datetime(startDate.year, 1, 1)

    # Calculate the beginning of the previous year
    previousYearStart = currentYearStart - timedelta(days=365)

    # Calculate date one year ago
    oneYearAgo = startDate - timedelta(days=365)

    # Loop through each row in the DataFrame
    for i in dataFrame.index:
        # Categorize based on the Current 4 Week range
        if fourWeeksAgo < dataFrame['Event Date'][i] < startDate:
            dataFrame.loc[i, 'Current 4 Week'] = str(dataFrame['CustomerAllNum'][i])
        else:
            dataFrame.loc[i, 'Current 4 Week'] = None

        # Categorize based on the Previous 4 Week range
        if eightWeeksAgo < dataFrame['Event Date'][i] < fourWeeksAgo:
            dataFrame.loc[i, 'Previous 4 Week'] = str(dataFrame['CustomerAllNum'][i])
        else:
            dataFrame.loc[i, 'Previous 4 Week'] = None

        # Categorize based on the Current YTD range
        if currentYearStart < dataFrame['Event Date'][i] < startDate:
            dataFrame.loc[i, 'Current YTD'] = str(dataFrame['CustomerAllNum'][i])
        else:
            dataFrame.loc[i, 'Current YTD'] = None

        # Categorize based on the Previous YTD range
        if previousYearStart < dataFrame['Event Date'][i] < oneYearAgo:
            dataFrame.loc[i, 'Previous YTD'] = str(dataFrame['CustomerAllNum'][i])
        else:
            dataFrame.loc[i, 'Previous YTD'] = None`}
        </SyntaxHighlighter>
        <h3 className="top_padding">DataFrame Upload to SQL Server</h3>
        <p>
          This section essentially takes a Pandas DataFrame and uploads its
          contents to a specified SQL Server table after formatting column names
          and handling potential spaces in headers. The process involves
          establishing a connection, creating an insert query, deleting existing
          rows from the target table, and then executing the insertion of data
          from the DataFrame into the SQL Server table.
        </p>
        <p>The following libraries are currently utilized in this section.</p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# pyodbc is establishing a connection to a SQL Server database and interacting with it
	import pyodbc
	# Pandas
	import pandas as pd`}
        </SyntaxHighlighter>
        <p>
          This section retrieves the column names from the DataFrame and formats
          them. If a column name contains spaces, it adds square brackets around
          it to ensure compatibility with SQL syntax.
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# Get the list of all column names from headers
	column_names = dataFrame.columns.values.tolist()

	# Adding brackets to column names with spaces
	column_names_with_bracket = [
    '[' + header + ']' if ' ' in header else header 
    for header in column_names
	]`}
        </SyntaxHighlighter>
        <p>
          This section establishes a connection to a SQL Server database using
          the pyodbc library. It includes server details such as IP address,
          database name, and login credentials (username and password).
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# Connection details to SQL Server
	server = 'Server IP' 
	database = 'Database Name' 
	username = 'user' 
	password = 'pass'
	
	cnxn = pyodbc.connect(
		f'DRIVER={{SQL Server}};'
		f'SERVER={server};'
		f'DATABASE={database};'
		f'UID={username};'
		f'PWD={password}'
	)
	cursor = cnxn.cursor()`}
        </SyntaxHighlighter>
        <p>
          This section dynamically creates an SQL insert query based on the
          provided SQL table name (SQLtable) and the formatted column names. It
          uses parameterized queries to ensure secure and efficient data
          insertion.
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# Create the insert query
	insert_query = (
    f"INSERT INTO {SQLtable} "
    f"({', '.join(column_names_with_bracket)}) "
    f"VALUES ({', '.join(['?'] * len(column_names))})"
	)`}
        </SyntaxHighlighter>
        <p>
          Here, the DataFrame is converted into a list of tuples
          (your_data_list). Each tuple represents a row in the DataFrame, making
          it suitable for bulk insertion into the SQL Server table.
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# Convert the DataFrame to a list of tuples
	your_data_list = [tuple(row) for row in dataFrame[column_names].values]
`}
        </SyntaxHighlighter>
        <p>
          This section executes the insert query using the executemany method,
          which efficiently handles bulk inserts. It includes error handling to
          capture and print specific programming errors, ensuring robustness.
          Finally, it commits the changes to the database and closes the cursor
          and connection.
        </p>
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {`	# Execute the insert query and handle errors
	try:
		cursor.executemany(insert_query, your_data_list)
		print("Upload Complete!")
		
	except pyodbc.ProgrammingError as e:
	
		# Handle errors and print specific messages
		print(f"Error: {e}")
		print(f"Problematic query: {insert_query}")

	# Commit changes and close the cursor and connection
	cnxn.commit()
	cursor.close()
	cnxn.close()`}
        </SyntaxHighlighter>

        <h3 className="top_padding">PowerBI Integration</h3>

        <p>
          In this API Project, I developed a versatile API key generator script
          and demonstrated seamless API data retrieval using Python. The final
          table, exemplifying sales data, serves as a snapshot of the potential
          output when imported into PowerBI.
        </p>

        <table border="1">
          <thead>
            <tr>
              <th>Sales</th>
              <th>Previous Four Weeks</th>
              <th>Current Four Weeks</th>
              <th>Percent Change</th>
              <th>Previous Year to Date</th>
              <th>Current Year to Date</th>
              <th>Percent Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Electronics</td>
              <td>1000</td>
              <td>1200</td>
              <td>+20.00%</td>
              <td>5000</td>
              <td>6000</td>
              <td>+20.00%</td>
            </tr>
            <tr>
              <td>Footwear</td>
              <td>800</td>
              <td>900</td>
              <td>+12.50%</td>
              <td>4000</td>
              <td>5000</td>
              <td>+25.00%</td>
            </tr>
            <tr>
              <td>Home Appliances</td>
              <td>700</td>
              <td>800</td>
              <td>+14.29%</td>
              <td>3000</td>
              <td>4000</td>
              <td>+33.33%</td>
            </tr>
            <tr>
              <td>Books</td>
              <td>600</td>
              <td>700</td>
              <td>+16.67%</td>
              <td>2000</td>
              <td>3000</td>
              <td>+50.00%</td>
            </tr>
            <tr>
              <td>Games</td>
              <td>500</td>
              <td>600</td>
              <td>+20.00%</td>
              <td>1000</td>
              <td>2000</td>
              <td>+100.00%</td>
            </tr>
            <tr>
              <td>Personal Care Products</td>
              <td>400</td>
              <td>500</td>
              <td>+25.00%</td>
              <td>800</td>
              <td>1600</td>
              <td>+100.00%</td>
            </tr>
            <tr>
              <td>Sporting Goods</td>
              <td>300</td>
              <td>400</td>
              <td>+33.33%</td>
              <td>600</td>
              <td>1200</td>
              <td>+100.00%</td>
            </tr>
            <tr>
              <td>Home Decor</td>
              <td>200</td>
              <td>300</td>
              <td>+50.00%</td>
              <td>400</td>
              <td>800</td>
              <td>+100.00%</td>
            </tr>
            <tr>
              <td>Toys</td>
              <td>100</td>
              <td>200</td>
              <td>+100.00%</td>
              <td>200</td>
              <td>400</td>
              <td>+100.00%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default APIproject;
