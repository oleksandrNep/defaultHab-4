const supabaseUrl = 'https://fftdfyfxakqljhnavuao.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmdGRmeWZ4YWtxbGpobmF2dWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NzY4NDAsImV4cCI6MjA1OTM1Mjg0MH0.rVMNdp2MclcZ0R6uPWYEEdL0xllvZCTAirA211ZElA8'
const client = supabase.createClient(supabaseUrl, supabaseKey);

async function addNotification() {
    // console.log('addHabit');
    let notName = document.getElementById('notName').value;
    let firstNotificationDate = document.getElementById('firstNotificationDate').value;
    let notFrequency = document.getElementById('notFrequency').value;
    // console.log(notName, firstNotificationDate, notFrequency);
    const { data, error } = await client
    .from('notifications')
    .insert([
      { name: notName, first_notification_date: firstNotificationDate, frequency: notFrequency },
    ])
    .select()
  
    document.getElementById('notName').value='';
    document.getElementById('firstNotificationDate').value='';
    document.getElementById('notFrequency').value='';
}