# Imports
import pandas as pd
# End of imports

# object for manifest data
manifest = pd.read_csv('Test Files\Pallet_20.csv')

# Objects for data already existing in the uploaded csv
df_upload = pd.read_csv("Test Files\Pallet_20.csv", usecols=['Item Description', 'Qty', 'Unit Retail','Ext. Retail','Item #'])
extRetail = pd.read_csv("Test Files\Pallet_20.csv", usecols=['Ext. Retail'])

# Object for manual price estimates
item_number = [1753823, 1651358, 7333505, 1017700, 3250047, 2606006, 2062725, 1788859, 2110609, 1727623, 1681499, 1271990, 1683306]
item_description = ["JBL BOOMBOX 3 WI-FI", "SONY HT-SC40 SOUNDBAR", "ONKYO TX-SR393 5.2 CH", "YAMAHA TSR-700 RECEIVER", "KLIPSCH R-120SWI", "SAMSUNG HW-Q67CT SYSTEM", "BOSE SOLO II TV SOUNDBAR", "KLIPSCH KD-51M BOOKSHELF", "ION PATHFINDER 4", "DENON C210 SOUND BAR", "SAMSUNG S80 SOUNDBAR", "SONOS PLAYBAR WITH MOUNT", "LG SP7R 7.1 CH SOUNDBAR" ]
item_unitRetail = [500.00, 190.00, 280.00, 400.00, 250.00, 230.00, 200.00, 150.00, 140.00, 100.00, 330.00, 580.00, 280.00]
est_revenue = [300, 65, 150, 310, 145, 86, 62, 135, 65, 62, 140, 160, 165]
percentageOfRetail = [0.60, 0.34, 0.54, 0.78, 0.58, 0.37, 0.31, 0.90, 0.46, 0.62, 0.42, 0.28, 0.59]

table_ofItems = {'Item Number' : item_number, 'Item Description' : item_description, 'Unit Retail' : item_unitRetail, 'Estimated Revenue' : est_revenue, 'Percentage of Retail' : percentageOfRetail}
df_output = pd.DataFrame(table_ofItems)

# Calculations for pallet sheet details
extRetail_sum = extRetail.sum()
# print(extRetail_sum)



# Saving output file to test files folder (uncomment below for test)
df_output.to_csv(r'Test Files\testOutput.csv', header=True, index=False)

print(extRetail_sum)