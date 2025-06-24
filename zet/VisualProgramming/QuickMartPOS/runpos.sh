#!/bin/bash

echo "Restoring packages..."
dotnet restore

echo "Building Project..."
dotnet build

echo "Running application..."
dotnet run
echo "====Done.===="

# make the scriot executable
# chmod +x runpos.sh

# run the script
# ./runpos.sh