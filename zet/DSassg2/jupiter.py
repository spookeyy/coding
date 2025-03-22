import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("rdu-weather-history.csv", sep=";")
obj = pd.read_csv("rdu-weather-history.csv", sep=";")

df['date'] = pd.to_datetime(df['date'])

# basic info
# print(df.head())
# print(df.info())
# print(df.describe())

# on jupyter notebook
# display(df.head())
# display(df.info())
# display(df.describe())

# Data Cleaning
obj.ffill(axis=0, inplace=True)

# Removing Duplicates
df.drop_duplicates(inplace=True)

# Renaming Columns
df.columns = df.columns.str.strip().str.lower()


plt.figure(figsize=(12, 6))
sns.lineplot(x=df['date'], y=df['tmax'], label="Max Temp")
sns.lineplot(x=df['date'], y=df['tmin'], label="Min Temp")
plt.title("Temperature Trends Over Time")
plt.xlabel("Date")
plt.ylabel("Temperature (°F)")
plt.legend()
plt.show()

plt.figure(figsize=(10, 5))
sns.histplot(df['prcp'], bins=20, kde=True)
plt.title("Distribution of Precipitation")
plt.xlabel("Precipitation (inches)")
plt.show()


plt.figure(figsize=(10, 5))
sns.heatmap(df[['tmin', 'tmax', 'prcp', 'awnd']].corr(), annot=True, cmap='coolwarm', fmt='.2f')
plt.title("Correlation Between Weather Attributes")
plt.show()

print("Key findings on weather trends and implications go here.")
